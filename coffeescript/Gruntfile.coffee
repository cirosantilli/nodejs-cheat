module.exports = (grunt) ->
  grunt.initConfig
    config:
      input: 'index'
    pkg: grunt.file.readJSON('package.json')
    clean: [
      '<%= config.input %>.js'
    ]
    coffee:
      '<%= config.input %>.js': '<%= config.input %>.coffee'
    shell:
      runcoffee:
        command: 'coffee <%= config.input %>.coffee'
      runjs:
        command: 'node <%= config.input %>.js'
    watch:
      files: ['<%= config.input %>.coffee']
      tasks: ['coffee']
      options: { nospawn: true }
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-shell'
  grunt.registerTask 'default', ['coffee', 'shell']
