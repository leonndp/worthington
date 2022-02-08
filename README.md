# Untitled Project

Website for Untitled Project

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/leonndp/keystone-mortgage
    $ cd keystone-mortgage
    $ yarn install
<!-- 
## Configure app

Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- A setting;
- Another setting;
- One more setting; -->

## Running the project

    $ yarn dev

## Simple build for production

    $ yarn build

---

## Styling

The CSS styles follow the BEM (Block, Element, Modifier) methodology to make more descriptive and semantic elements. (http://getbem.com/introduction/)

This project also uses the PostCSS preprocessor, which includes different features to make styling easier for developers. (https://github.com/postcss/postcss)

### Imports

Instead of placing every CSS style into a single stylesheet, each class has its own file sharing the same name, which is then imported into the main `styles.css` file (https://github.com/postcss/postcss-import). Such stylesheets are to be stored in the `assets/styles/modules` directory, with the `.css` file extension.

    @import 'normalize.css';
    @import 'base/_variables';
    @import 'base/_mixins';
    @import 'base/_global';

### Autoprefixing

This PostCSS plugin automatically includes prefixes in the production version (https://github.com/postcss/autoprefixer)

### Nesting

Similar to SASS, the PostCSS setup in this project allows for users to nest their CSS code for better organization. (https://github.com/postcss/postcss-nested)

    myDiv {
        myOtherDiv {
            /* Your code here */
        }

        &__myElement {
            /* ... */
        }
    }

### Variables

The styles in this project make use of variables (https://github.com/postcss/postcss-simple-vars). They can be found and stored in the `assets/styles/base/_variables.css` file. Variables can be declared like so:

    $myColor: #FFFFFF
    $myWidth: 680px

### Mixins

Mixins are used in this project, particularly for creating responsive media queries. (https://github.com/postcss/postcss-mixins) They can be found in the `assets/styles/base/_mixins.css` file.

    @define-mixin atSmall {
        @media (min-width: 576px) {
            @mixin-content;
        }
    }