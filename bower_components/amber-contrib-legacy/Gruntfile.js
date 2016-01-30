'use strict';

var fs = require('fs'),
    path = require('path');

function findAmberPath(options) {
    var result;
    options.some(function (x) {
        var candidate = path.join(__dirname, x);
        return fs.existsSync(path.join(candidate, 'support/boot.js')) && (result = candidate);
    });
    return result;
}

module.exports = function (grunt) {
    var path = require('path');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('amber-dev');

    // Default task.
    grunt.registerTask('default', ['amberc:all']);
    grunt.registerTask('devel', ['amdconfig:app', 'requirejs:devel']);
    grunt.registerTask('deploy', ['amdconfig:app', 'requirejs:deploy']);

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        // pkg: grunt.file.readJSON(''),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // task configuration
        amberc: {
            options: {
                amber_dir: findAmberPath(['../..', 'bower_components/amber']),
                library_dirs: ['src'],
                closure_jar: ''
            },
            all: {
                src: [
                    'src/Benchfib.st', 'src/Examples.st', 'src/IDE.st' // list all sources in dependency order
                    // list all tests in dependency order
                ],
                amd_namespace: 'amber/legacy',
                libraries: ['Web']
            }
        },

        amdconfig: {app: {dest: 'config.js'}},

        requirejs: {
            deploy: {options: {
                mainConfigFile: "config.js",
                onBuildWrite: function (moduleName, path, contents) {
                    return moduleName === "config" ? contents + "\nrequire.config({map:{'*':{app:'deploy'}}});" : contents;
                },
                pragmas: {
                    excludeIdeData: true,
                    excludeDebugContexts: true
                },
                include: ['config', 'node_modules/requirejs/require', 'deploy'],
                out: "the.js"
            }},
            devel: {options: {
                mainConfigFile: "config.js",
                onBuildWrite: function (moduleName, path, contents) {
                    return moduleName === "config" ? contents + "\nrequire.config({map:{'*':{app:'devel'}}});" : contents;
                },
                include: ['config', 'node_modules/requirejs/require'],
                out: "the.js"
            }}
        }

    });

};
