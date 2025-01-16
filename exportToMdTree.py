import sys
import os
from directory_tree import DisplayTree


def list_files(startpath):
    for root, dirs, files in os.walk(startpath):
        level = root.replace(startpath, '').count(os.sep) - 1
        indent = ' ' * 2 * (level)
        basename = os.path.basename(root)
        relpath = os.path.relpath(root)
        if "visualscript" in relpath: 
                continue
        if "creator" in relpath: 
                continue
        if "_partials" in relpath: 
                continue
        print('{}- [{}]({}/index.md) '.format(indent, basename, relpath, basename))
        subindent = ' ' * 2 * (level + 1)
        for f in files:
            if "index.md" in f:
                continue
            if ".md" not in f: 
                continue
            print('{}- [{}]({}/{}) '.format(subindent, f, relpath, f))


def main() -> int:
    list_files('.')
    return 0

if __name__ == '__main__':
    sys.exit(main())  # next section explains the use of sys.exit