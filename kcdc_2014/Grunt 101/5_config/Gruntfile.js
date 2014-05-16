module.exports = function(grunt) {

   // dynamic loading of task
   require('load-grunt-tasks')(grunt);
	require('load-grunt-config')(grunt); 
		 
	// A very basic default task.
	grunt.registerTask('default', ['watch']);
};