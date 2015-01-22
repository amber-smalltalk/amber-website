# TrySmalltalk

Tutorial to learn Smalltalk, on-line here http://amber-smalltalk.github.io/trysmalltalk/


This project is an [Amber Smalltalk](http://amber-lang.net/)  example. Amber may run in a web browser or as a command line program.


Tools needed
------------

1. A web browser with reasonably good support for HTML5 canvas.
2. git, on Windows [Git for Windows](msysgit.github.io)
3. [nodejs](http://www.nodejs.org/). This will give you the node package manager `npm` as well.
4. A global install of the [`amber-cli`](http://amber-lang.net/) [npm](http://npmjs.org/) package
5. A global install of the [`bower`](http://bower.io/) client side package manager in order to install the dependencies
6. A global install of the [`grunt-cli`](http://gruntjs.com/) task runner which is used as the command line build system 

The `amber`, `bower` and `grunt-cli` packages can be installed with the following command:

    npm install --global amber-cli bower grunt-cli

or as short form:

    npm i -g amber-cli bower grunt-cli
    

Reference: http://docs.amber-lang.net/js-glossary.html


## Getting Started

Bring project alive (for example after `git clone`):

```sh
npm install
bower install
grunt devel
```

Developing the project (after brought alive):
 
Start server with `amber serve` and go to `http://localhost:4000/` in your browser and follow the instructions
