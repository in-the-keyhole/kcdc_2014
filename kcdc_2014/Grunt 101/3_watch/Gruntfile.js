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
	
	// load task into grunt
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	// A very basic default task.
	grunt.registerTask('default', ['watch']);
};