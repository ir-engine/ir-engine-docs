import sys
import os
from directory_tree import DisplayTree


def list_files(startpath):
    for root, dirs, files in os.walk(startpath):
        dirs.sort()
        level = root.replace(startpath, '').count(os.sep)
        if(level == 0):
            continue
        indent = ' ' * 2 * (level - 1)
        basename = os.path.basename(root)
        relpath = os.path.relpath(root, start=startpath)
        if "d_" == basename[:2]:
            continue
        if "visualscript" in relpath: 
                continue
        if "creator" in relpath: 
                continue
        if "_partials" in relpath: 
                continue
        if not os.path.exists(root+"/index.md"):
            continue
        print('{}- [{}]({}/index.md) '.format(indent, basename, relpath, basename))
        subindent = ' ' * 2 * (level)
        files.sort()
        for f in files:
            if "d_" == f[:2]:
                continue
            if "index.md" in f:
                continue
            if ".md" not in f: 
                continue
            print('{}- [{}]({}/{}) '.format(subindent, f, relpath, f))


def main() -> int:
    # print("Any Header content\n")
    list_files('./docs')
    return 0

if __name__ == '__main__':
    sys.exit(main())  # next section explains the use of sys.exit