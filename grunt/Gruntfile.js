module.exports = function(grunt) {

  // Project configuration.
  // Templates: any value can be reused elsewhere.
  // - <%= pkg.name %>
  // - <%= uglify.build.src %>
  grunt.initConfig({
    // My.
    pkg: grunt.file.readJSON('package.json'),
    'basic': {
      arg0: 0,
      arg1: 1,
    },
    'multi': {
      task0: 'target0',
      task2: 'target2',
      task1: 'target1',
    },
    // TODO not working.
    // WONTFIX to kill bg processes: https://github.com/rma4ok/grunt-bg-shell/issues/14
    bgShell: {
      _defaults: {
        bg: true
      },
      coffee: {
        cmd: 'coffee -cw coffee.coffee',
      },
    },
    // Contrib.
    clean: [
      'uglify.min.js',
      'coffee.js',
    ],
    // Each of the following configures a plugin.
    coffee: {
      'coffee.js': 'coffee.coffee',
    },
    // TODO get working.
    forever: {
      coffee: {
        options: {
          cmd: 'coffee -cw coffee.coffee',
        }
      },
    },
    // grunt shell
    // grunt shell:a
    // grunt shell:b
    shell: {
      a: {
        command: 'echo a',
      },
      b: {
        command: 'echo b',
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        src: 'uglify.js',
        dest: 'uglify.min.js',
      },
    },
    watch: {
      files: ['**/*.js'],
      tasks: ['uglify'],
      options: { nospawn: true },
    },
  })

  // Load taks from plugins.
  // Required to use the plugins.
  // Plugin packages must have been installed with `npm install`.
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-bg-shell')
  grunt.loadNpmTasks('grunt-forever')
  grunt.loadNpmTasks('grunt-shell')

  // Default task, can be run sipmly with `grunt`.
  grunt.registerTask('default', ['coffee', 'uglify'])

  // Create new task.

    /// There are two types of task: basic and multi.

    // Basic task. Run with:
    //
    //     grunt basic
    //     grunt basic:a
    //     grunt basic:a:b
    //
    // Very limited because cannot use the configuration.
    grunt.registerTask('basic', 'Custom basic task description.', function(arg0, arg1) {
      grunt.log.writeln('this.name = ' + this.name)
      grunt.log.writeln('arg0 = '      + arg0)
      grunt.log.writeln('arg1 = '      + arg1)
    })

    // Multi-task. Run with:
    //
    //     grunt multi
    //     grunt multi:task0
    //     grunt multi:task0:a
    //     grunt multi:task0:a:b
    //     grunt multi:task1
    grunt.registerMultiTask('multi', 'Custom multi task description.', function(arg0, arg1) {

      // console.log works, grunt.log.writeln is more integrated with Grunt,
      // so use it instead.
      console.log('multi')
      grunt.log.writeln('multi')

      grunt.log.writeln('this.name   = ' + this.name)
      grunt.log.writeln('this.target = ' + this.target)
      grunt.log.writeln('this.data   = ' + this.data)
      grunt.log.writeln('arg0        = ' + arg0)
      grunt.log.writeln('arg1        = ' + arg1)
    })
}
