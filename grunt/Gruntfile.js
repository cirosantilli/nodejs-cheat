module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Each of the following configures a plugin.
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= pkg.name %>.js',
        dest: '<%= pkg.name %>.min.js'
      }
    },
    clean: ['<%= pkg.name %>.min.js']
  });

  // Load the plugins you need.
  // Must have been installed with `npm install`.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task, can be run sipmly with `grunt`.
  grunt.registerTask('default', ['uglify']);

};
