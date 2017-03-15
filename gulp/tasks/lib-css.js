var gulp = require('gulp');
var notify = require('gulp-notify');
var config = require('../../config').css;
// process JS files and return the stream.
gulp.task('lib-css', function() {
  return gulp.src(config.libsrc)
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(notify({ message: 'lib-css task complete' }));
});
