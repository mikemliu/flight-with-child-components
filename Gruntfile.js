module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    bump: {
      options: {
        files: [
          'package.json',
          'bower.json'
        ],
        commit: true,
        commitMessage: 'v%VERSION%',
        commitFiles: ['-a'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'v%VERSION%',
        push: true,
        pushTo: 'origin',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
      }
    },
    umd: {
      default: {
        options: {
          src: 'lib/flight-with-child-components.js',
          dest: 'build/flight-with-child-components.js'
        }
      }
    }
  });
};
