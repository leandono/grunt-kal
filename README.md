# grunt-kal

> Compile Kal files to JavaScript

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-kal --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-kal');
```

## The "kal" task

Run this task with the `grunt kal` command.

### Overview
In your project's Gruntfile, add a section named `kal` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  kal: {
    options: {
      // Task-specific options go here.
    },
    yourTarget: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.bare
Type: `Bolean`
Default value: `false`

Don't wrap the output in a function.

### Usage Examples

```js
grunt.initConfig({
  kal: {
    compile: {
      files: {
        'path/to/result.js'': ['path/to/source.kal'], // 1:1 compile
        'path/to/another.js': ['path/to/sources/*.kal', 'path/to/more/*.kal'] // compile and concat into single file
      }
    },
    compileBare: {
      options: {
        bare: true
      },
      files: {
        'path/to/result.js'': ['path/to/source.kal'], // 1:1 compile
        'path/to/another.js': ['path/to/sources/*.kal', 'path/to/more/*.kal'] // compile and concat into single file
      }
    }
  }
})
```

## Release History

- 2013-18-08   v0.1.0   First release. Kal version: `0.4.x`.
