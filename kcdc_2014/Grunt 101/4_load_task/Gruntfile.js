module.exports = function(grunt) {
   // Project configuration.
   grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		jshint: {
			all: ['Gruntfile.js', 'js/*.js']
		 },
		 
		 watch: {
		    jshint: {
		        files: 'js/*.js',
		        tasks: 'jshint'
		    },
		 }
	});
	
   // dynamic loading of task
   require('load-grunt-tasks')(grunt);
	
	// A very basic default task.
	grunt.registerTask('default', ['watch']);
};