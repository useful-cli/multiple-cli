var gulp = require('gulp'); 
var runSequence = require('run-sequence');
/** * Run all tasks needed for a build in defined order */ 
gulp.task('build', function(callback) { 
	runSequence('delete',
			[
				'less',
				'simple-scripts',
				'images',
				'lib-scripts', 
				'lib-css', 
				'copy:fonts',
				'fileinclude',
		  ],
  		'copy:index',
		callback);
});