## Building Documentation locally
---
1. Generating Documentation locally
Building documentation requires python as it is configured right now there isn't another way to build it. I would also recommend the pandoc CLI tool for converting .md files into rst files
1. Creating virtual env
```
python -m venv .venv
```

1. install packages
```
pip install -r requirements.txt
```

1. Build Html
```
sphinx-build -b html source/ source/build
```

1. Where are the docs located in `docs/build` to view first execute
```
cd docs/build/
```
then
```
open index.rst
```
Note: you could build to many other file types listed [here](https://www.sphinx-doc.org/en/master/man/sphinx-build.html)

## Converting md to rst files with little work
---
I recommend using [pandoc](https://pandoc.org/installing.html#github-actions). It's a free  way to generate documentation. Taking notes in markdown and exporting to pdf is easy it also allows you to use extensions for `latex` that way you are able keep the amount of tools done. 
**Note:** Files do not come out perfect but it's better than learning rst in it's entirety

1. Converting docs one at a time
Assuming that you are are inside of the `docs/source/automation` folder
```
pandoc --from=markdown --to=rst --output=CYPRESS_README.rst CYPRESS_README
```
1. Converting docs all at once
Assuming that you are are inside of the `docs/source/automation` folder
```
find . -exec pandoc --from=markdown --to=rst --output={}.rst {} \;
```

1. install packages
```
pip install -r requirements.txt
```

1. Build Html
```
sphinx-build -b html source/ source/build
```

1. Where are the docs located in `docs/build` to view first execute
```
cd docs/build/
```
then
```
open index.rst
```

## Adding your modules to your local readthedocs
---
Assuming that you're inside of `docs/source` folder
1. Open `index.rst ` in your test editor
1. Under `Contents, .toctree` add your file either `file.rst` or `folder/file.rst `

### What is SPHINX
[SPHINX](https://www.sphinx-doc.org/en/master/) is an automated way to create Documentation. It's what lies under readthedocs. There is pretty extensive documentation in the link

### rst
[rst](https://docs.fileformat.com/programming/rst/) is a file type that supports a custom markup language, built it python it's has been extended to be used in a variety of [languages](https://www.sphinx-doc.org/en/master/tutorial/describing-code.html#other-languages-c-c-others)
