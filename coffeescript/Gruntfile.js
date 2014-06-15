

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: [
      'main.js',
    ],
    coffee: {
      'main.js': 'main.coffee'
    },
    shell: {
      run: {
        command: 'node main.js',
      },
    },
    watch: {
      files: ['main.coffee'],
      tasks: ['coffee'],
      options: { nospawn: true },
    },
  })
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-shell')
  grunt.registerTask('default', ['coffee'])
  grunt.registerTask('run', ['coffee', 'shell:run'])
}
