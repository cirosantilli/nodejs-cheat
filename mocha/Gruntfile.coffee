module.exports = (grunt) ->
  grunt.initConfig
    ###
    ##grunt-mocha-test

    Run Node.js mocha tests.

    There is also the grunt-mocha package, which is specialized for
    running phantomjs tests.
    ###
    mochaTest:
      test:
        options:
          reporter: 'spec'
          require: 'coffee-script'
        src: '*.@(coffee|js)'
  grunt.loadNpmTasks 'grunt-mocha-test'
  grunt.registerTask 'default', ['mochaTest']
