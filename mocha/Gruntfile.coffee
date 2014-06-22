module.exports = (grunt) ->
  grunt.initConfig
    ###
    ##grunt-mocha-test plugin

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
    shell:
      programmatic:
        command: 'node programmatic.js'
  grunt.loadNpmTasks 'grunt-mocha-test'
  grunt.loadNpmTasks 'grunt-shell'
  grunt.registerTask 'default', '', ->
    grunt.option 'force', true
    grunt.task.run ['shell:programmatic', 'mochaTest']
