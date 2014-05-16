module.exports = function(grunt) {
   // Project configuration.
   grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		jshint: {
			all: ['Gruntfile.js', 'js/*.js']
		 }
	});
	
	// load task into grunt
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	// A very basic default task.
	grunt.registerTask('default', ['jshint']);
};