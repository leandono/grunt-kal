/*
 * grunt-kal
 * https://github.com/dzignus/grunt-kal
 *
 * Copyright (c) 2013 Leandro D'Onofrio
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  //Grunt modules
  var util    = grunt.util;
  var verbose = grunt.verbose;
  var file    = grunt.file;
  var log     = grunt.log;
  var fatal   = grunt.fatal;

  //External modules
  var kal     = require('kal');

  grunt.registerMultiTask('kal', 'Compile Kal files to JavaScript', function() {

    //Default options
    var options = this.options({
      bare: false,
      separator: util.linefeed
    });

    //Print options
    verbose.writeflags(options, 'Options');

    //For each file...
    this.files.forEach(function(f) {

      var src = f.src.filter(function(filepath) {

        //Check if the filepath exists
        if (!file.exists(filepath)) {

          log.warn('Source file "' + filepath + '" not found.');

          return false;

        } else {

          return true;

        }

      }).map(function(filepath) {

        var compiled;

        //Try compile the .kal file
        try {

          compiled = kal.compile(file.read(filepath), options);

        } catch(e) {

          fatal('Got an unexpected exception from the kal compiler. \n' + 'File: ' + filepath + '\n' + 'Error message: ' + e);

        }

        return compiled;

      //Join everything
      }).join(util.normalizelf(options.separator));

      //Write in the destination file
      file.write(f.dest, src);

      log.writeln('File "' + f.dest + '" created.');

    });

  });

};
