#!/usr/bin/env node

/**
 * replaceMarkdownPartials.js
 * 
 * A Node.js script for processing Markdown documentation that:
 * 1. Recursively inlines "partial" files using custom placeholder tags.
 * 2. Comments out all real import statements at the top of Markdown files,
 *    ignoring imports that appear in code snippets.
 * 3. Conditionally comments out `<DocCardList />` if the file imports `DocCardList`.
 * 4. Skips overwriting partial files themselves (only modifies top-level `.md` docs).
 *
 * ## Usage
 *
 * 1. Place this script in the root directory of your project, near the `docs` folder.
 *    - Example structure:
 *        developer-docs/
 *        ├─ docs/
 *        ├─ replaceMarkdownPartials.js  (this script)
 *        └─ ...
 *
 * 2. By default, this script expects:
 *    - A `docs` folder containing your Markdown documentation and subfolders.
 *    - A special folder named `d__partials` (inside `docs`) that holds partial Markdown files.
 *      - e.g. `docs/d__partials/...`
 *
 * 3. Run the script via Node:
 *        node replaceMarkdownPartials.js
 *
 * 4. The script will recursively scan `.md` files in `docs` (excluding the partials folder),
 *    replacing placeholder tags (e.g., `<PlaceholderName />`) with the contents of the corresponding
 *    partial file if there's an import statement for that placeholder name.
 *
 * 5. Code blocks (fenced with triple backticks ``` ... ``` in Markdown) are skipped for “commenting
 *    out” import lines, so your inline code examples remain intact.
 *
 * ## How it Works
 *
 * ### Imports & Placeholders
 * - If your Markdown file has a line like:
 *     import Introduction from '@site/docs/_partials/roadmap/intro.md'
 *   Then anywhere in that file where you have:
 *     <Introduction />
 *   The script will inline the content of `intro.md`.
 *
 * ### Nested Partials
 * - If `intro.md` itself has imports and placeholders, those will be resolved too,
 *   as the script recursively processes partials.
 *
 * ### DocCardList
 * - If your file imports `DocCardList` from '@theme/DocCardList', we replace `<DocCardList />` with
 *   `<!-- <DocCardList /> -->`. This ensures it doesn’t break your build or appear in your final doc.
 *
 * ### Code Blocks
 * - We temporarily extract fenced code blocks. While they’re out of the document, we comment out
 *   real import lines in the top-level text. Then we restore code blocks, keeping your example
 *   `import` statements intact.
 *
 * ### Output
 * - Only top-level `.md` files get overwritten. Files in `d__partials` remain untouched on disk,
 *   though their content is inlined in the final doc.
 *
 * ## Limitations
 * - The script only handles simple named imports (e.g., `import Foo from '...'`). If you need
 *   to handle more complex scenarios like `import { Foo, Bar } from '...'` or `import * as X from '...'`,
 *   adjust the regex in `extractImports()`.
 * - If partials import each other in a cycle, the script will detect it and insert a
 *   `<!-- Circular import detected -->` comment instead of infinite recursion.
 */

// Built-in Node modules
const fs = require('fs');
const path = require('path');

/** 
 * The main `docs` directory for your Markdown files.
 * Modify if your docs folder is named differently.
 */
const DOCS_DIR = path.join(__dirname, 'docs');

/**
 * Name of the folder where partial files live (inside `docs`).
 * We skip overwriting files in this folder.
 */
const PARTIALS_FOLDER_NAME = 'd__partials';

/**
 * We never treat these tag names as partial placeholders.
 * For instance, we skip `<DocCardList />` as a partial, but do comment it out separately if imported.
 */
const IGNORED_TAGS = ['DocCardList'];

/**
 * Recursively gathers all `.md` file paths from a directory.
 * @param {string} dir - Directory to scan
 * @returns {string[]} Array of Markdown file paths
 */
function getMarkdownFiles(dir) {
  let files = [];
  if (!fs.existsSync(dir)) {
    return files;
  }
  const dirItems = fs.readdirSync(dir);
  for (const item of dirItems) {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      // Recurse into subdirectories
      files = files.concat(getMarkdownFiles(fullPath));
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

/**
 * Converts an import path such as '@site/docs/_partials/foo.md' or './_partials/foo.md'
 * into an absolute path on disk.
 * @param {string} importPath - The import path from the Markdown file
 * @param {string} currentFilePath - The file that contains the import
 * @returns {string} - Resolved absolute path with normalized slashes
 */
function resolveImportPath(importPath, currentFilePath) {
  if (importPath.startsWith('@site')) {
    // e.g. '@site/docs/_partials/roadmap/intro.md'
    return path
      .join(
        __dirname,
        importPath
          .replace('@site', '.')
          .replace('_partials', PARTIALS_FOLDER_NAME)
      )
      .replace(/\\/g, '/');
  } else {
    // e.g. './_partials/roadmap/intro.md'
    return path
      .resolve(
        path.dirname(currentFilePath),
        importPath.replace('_partials', PARTIALS_FOLDER_NAME)
      )
      .replace(/\\/g, '/');
  }
}

/**
 * Extracts imports of the pattern `import Alias from 'Path'`.
 * Returns an object { Alias: '/absolute/path' }.
 * 
 * @param {string} content - File content
 * @param {string} filePath - Path of the file being processed
 * @returns {{[alias: string]: string}} Object mapping aliases to absolute file paths
 */
function extractImports(content, filePath) {
  const importRegex = /import\s+(\w+)\s+from\s+['"](.*?)['"]/g;
  let match;
  const imports = {};
  while ((match = importRegex.exec(content)) !== null) {
    const [_, alias, rawPath] = match;
    imports[alias] = resolveImportPath(rawPath, filePath);
  }
  return imports;
}

/**
 * Comments out lines that start with "import " (only outside code blocks).
 * This is used *after* we strip code blocks from the main content.
 * 
 * @param {string} content - Markdown content without code blocks
 * @returns {string} Updated content with import lines commented out
 */
function commentOutImports(content) {
  const importRegex = /^import\s+.*$/gm;
  return content.replace(importRegex, (line) => `<!-- ${line} -->`);
}

/**
 * Recursively processes the file at `filePath`, returning the fully inlined content.
 * - Detects and warns on circular imports.
 * - Extracts code blocks and re-injects them later.
 * 
 * @param {string} filePath - Absolute path to the file (doc or partial)
 * @param {Set<string>} visited - Tracks visited files (for circular import detection)
 * @returns {string} The fully processed file content
 */
function processFileContent(filePath, visited = new Set()) {
  // Detect cycles (if partial A imports partial B, which imports partial A)
  if (visited.has(filePath)) {
    console.warn(`[WARN] Circular import detected for file: ${filePath}`);
    return `<!-- Circular import detected: ${filePath} -->`;
  }
  visited.add(filePath);

  // Read file
  let content;
  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error(`[ERROR] Unable to read file: ${filePath}`, error);
    return `<!-- Error reading file: ${filePath} -->`;
  }

  // 1. Extract code blocks so we don't accidentally comment out "import" lines in the examples.
  const codeBlocks = [];
  let codeBlockIndex = 0;

  // Matches from ``` up to the next ```, including newlines and everything in between
  const codeBlockRegex = /```[\s\S]*?```/gm;

  content = content.replace(codeBlockRegex, (match) => {
    codeBlocks.push(match); // Store the entire block
    return `___CODEBLOCK_${codeBlockIndex++}___`; // Temporary placeholder
  });

  // 2. Extract top-level imports
  const imports = extractImports(content, filePath);

  // 3. Comment out top-level import lines
  content = commentOutImports(content);

  // 4. If this file imports DocCardList, comment out <DocCardList />
  if (Object.keys(imports).includes('DocCardList')) {
    content = content.replace(
      /<DocCardList\s*\/>/g,
      `<!-- <DocCardList /> -->`
    );
  }

  // 5. Replace placeholder tags like <AliasName /> with the partial content
  const tagRegex = /<\s*([a-zA-Z0-9_]+)\s*\/\s*>/g;

  content = content.replace(tagRegex, (match, tagName) => {
    // Skip ignored tags (e.g., DocCardList). We already handled it above.
    if (IGNORED_TAGS.includes(tagName)) {
      return match;
    }

    // If there's an import for tagName, treat it as a partial
    if (imports[tagName]) {
      const partialPath = imports[tagName];
      if (fs.existsSync(partialPath)) {
        const partialContent = processFileContent(partialPath, visited);
        return `<!-- Start of partial: ${tagName} -->\n${partialContent}\n<!-- End of partial: ${tagName} -->`;
      } else {
        console.warn(`[WARN] Partial file not found for tag: ${tagName} => ${partialPath}`);
        return `<!-- Missing partial file for tag: ${tagName} -->`;
      }
    } else {
      // No matching import for that placeholder
      console.warn(`[WARN] No matching import for tag: ${tagName} in file: ${filePath}`);
      return `<!-- Missing content for tag: ${tagName} -->`;
    }
  });

  // 6. Re-inject code blocks
  codeBlocks.forEach((block, idx) => {
    const placeholder = `___CODEBLOCK_${idx}___`;
    content = content.replace(placeholder, block);
  });

  // 7. Remove any leading blank lines
  content = content.replace(/^\s*\n+/, '');

  return content;
}

/**
 * Loads the content of a .md file, processes it (inlining partials, commenting out imports, etc.),
 * and overwrites the file's contents **if** it is NOT a partial.
 *
 * @param {string} filePath - The path to a .md file
 */
function replacePartialsInFile(filePath) {
  // Skip overwriting files in `d__partials` folder
  const isPartial = filePath.includes(PARTIALS_FOLDER_NAME);

  // Recursively build the final content
  const processedContent = processFileContent(filePath);

  // Only overwrite if it's a top-level doc
  if (!isPartial) {
    try {
      fs.writeFileSync(filePath, processedContent, 'utf-8');
      console.log(`[SUCCESS] Processed file: ${filePath}`);
    } catch (err) {
      console.error(`[ERROR] Failed to write file: ${filePath}`, err);
    }
  } else {
    console.log(`[SKIP] Partial file (not overwritten): ${filePath}`);
  }
}

/**
 * Main function to process all Markdown files within the `docs` directory.
 * - Gathers all `.md` files (recursively).
 * - Calls `replacePartialsInFile` for each.
 * - Skips overwriting partial files themselves.
 */
function processDocumentation() {
  console.log(`[INFO] Scanning documentation in: ${DOCS_DIR}`);
  const markdownFiles = getMarkdownFiles(DOCS_DIR);

  markdownFiles.forEach((file) => {
    replacePartialsInFile(file);
  });

  console.log('[INFO] Processing complete.');
}

/** 
 * Entrypoint: Start the script.
 * Node best practice is to have a function or an IIFE for the main logic, 
 * but for a short script, we just call `processDocumentation()`.
 */
processDocumentation();
