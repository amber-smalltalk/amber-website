/* DO NOT EDIT! This file is generated. */

var require;
if (!require) require = {config: function (x) {require = x;}};
require.config({
  "paths": {
    "helios/showdown": "bower_components/showdown/src/showdown",
    "requireJS": "node_modules/requirejs/require",
    "require-css": "bower_components/require-css",
    "jquery": "bower_components/jquery/jquery",
    "jquery-ui": "bower_components/jquery-ui/jquery-ui",
    "codemirror": "bower_components/codemirror",
    "bootstrap2.3.2": "bower_components/bootstrap2.3.2/bootstrap",
    "mousetrap": "bower_components/mousetrap/mousetrap",
    "jquery.blockUI": "bower_components/blockui/jquery.blockUI",
    "amber-trysmalltalk": "bower_components/trysmalltalk/src",
    "helios": "bower_components/helios/src",
    "helios/resources": "bower_components/helios/resources",
    "helios/index": "bower_components/helios/index",
    "amber-ide-starter-dialog": "bower_components/amber-ide-starter-dialog/lib/idestarter",
    "amber/web": "bower_components/amber-contrib-web/src",
    "amber/legacy": "bower_components/amber-contrib-legacy/src",
    "amber/legacy/resources": "bower_components/amber-contrib-legacy/resources",
    "amber": "bower_components/amber/support",
    "amber_core": "bower_components/amber/src",
    "amber/jquery": "bower_components/amber-contrib-jquery/src",
    "amber-trysmalltalkdemo": "src"
  },
  "rjs_comment1": "require.min should be removed",
  "rjs_comment2": "it's backward compatibility hack if config finds",
  "rjs_comment3": "support/requirejs before node_modules/requirejs;",
  "rjs_comment4": "the former will go away in 0.14.0",
  "map": {
    "*": {
      "css": "require-css/css",
      "00comment": "These are backward compatibility pointers.",
      "amber-contrib-web/Web": "amber/web/Web",
      "amber_core/Web": "amber/web/Web",
      "amber_core/Canvas": "amber/web/Web",
      "amber-attic/Benchfib": "amber/legacy/Benchfib",
      "amber-attic/Examples": "amber/legacy/Examples",
      "amber-attic/IDE": "amber/legacy/IDE",
      "amber_core/Kernel-ImportExport": "amber_core/Platform-ImportExport",
      "amber-contrib-jquery/Wrappers-JQuery": "amber/jquery/Wrappers-JQuery"
    }
  },
  "shim": {
    "jquery-ui": {
      "deps": [
        "jquery",
        "jquery"
      ]
    },
    "codemirror/lib/codemirror": {
      "deps": [
        "css!codemirror/lib/codemirror",
        "css!codemirror/lib/codemirror"
      ]
    },
    "bootstrap2.3.2/js/bootstrap": {
      "deps": [
        "jquery",
        "css!bootstrap2.3.2/css/bootstrap"
      ]
    },
    "ensure-console": {
      "exports": "console"
    }
  }
});