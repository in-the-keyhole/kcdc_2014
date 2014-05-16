module.exports = function(grunt) {
   // Project configuration.
   grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
	});
	
	// A very basic default task.
	grunt.registerTask('default', function() {
		grunt.log.write('Simple Default Task...').ok();
	});
};