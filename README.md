# Vue large structure

> Template for large app with Vue.js

This repo is a project with custom organization, with goal of should be simple and fast.
**Only Unix based**

## Installation

For global installation:
```bash
wget https://raw.githubusercontent.com/leonardovilarinho/vue-shell-template/master/vshell --no-cache; chmod +x vshell; sudo mv vshell /usr/local/bin/vshell
```

For local installation:
```bash
git clone https://github.com/leonardovilarinho/vue-shell-template <project-name>
cd <project-name>; yarn
```

## Shell commands
```bash
# create new page
./vshell p <pagename>

# create new vuex module
./vshell m <modulename>

# create new page block
./vshell b <blockname>

# create new subpage
./vshell s <subpagename>

# create new common block
./vshell c <commonname>

# create new util file
./vshell u <utilname>
```