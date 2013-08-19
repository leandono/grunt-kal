'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.kal = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default: function(test) {

    test.expect(2);

    test.equal(grunt.file.read('tmp/default/kal1.js'), grunt.file.read('test/expected/default/kal1.js'), 'Should compile kal to javascript');

    test.equal(grunt.file.read('tmp/default/concat.js'), grunt.file.read('test/expected/default/concat.js'), 'Should compile kal to javascript');

    test.done();
  },
  bare: function(test) {

    test.expect(2);

    test.equal(grunt.file.read('tmp/bare/kal1.js'), grunt.file.read('test/expected/bare/kal1.js'), 'Should compile kal to unwrapped javascript');

    test.equal(grunt.file.read('tmp/bare/concat.js'), grunt.file.read('test/expected/bare/concat.js'), 'Should compile kal to unwrapped javascript');

    test.done();
  },
};
