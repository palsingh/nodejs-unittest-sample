module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
        options: {
            sourceMap: true,
            presets: ['es2015']
        },
        dist: {
            files: {
                'app/index.js': 'app/es6/index.es6'
            }
        }
    },
    watch: {
      scripts: {
        files: ['app/es6/index.es6'],
        tasks: ['babel'],
        options: {
          spawn: false,
          livereload: {
            host: 'localhost',
            port: 9000
          }
        },
      },
    }
  });

  // Load the plugins.
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['babel', 'watch']);

};