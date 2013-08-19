/*
 * grunt-kal
 * https://github.com/dzignus/grunt-kal
 *
 * Copyright (c) 2013 Leandro D'Onofrio
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    kal: {
      'default': {
        files: {
          'tmp/default/kal1.js': ['test/fixtures/kal1.kal'],
          'tmp/default/concat.js': ['test/fixtures/kal1.kal', 'test/fixtures/kal2.kal']
        }
      },
      'bare': {
        options: {
          bare: true
        },
        files: {
          'tmp/bare/kal1.js': ['test/fixtures/kal1.kal'],
          'tmp/bare/concat.js': ['test/fixtures/kal1.kal', 'test/fixtures/kal2.kal']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'kal', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
