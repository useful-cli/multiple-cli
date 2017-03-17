var gulp = require('gulp');
var notify = require('gulp-notify');
var config = require('../../../config').scripts;
// process JS files and return the stream.
gulp.task('lib-scripts', function() {
  return gulp.src(config.libjs)
    .pipe(gulp.dest('dist/assets/js/lib'))
    .pipe(notify({ message: 'lib-scripts task complete' }));
});
