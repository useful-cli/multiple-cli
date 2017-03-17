var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var config = require('../../../config').include;

gulp.task('fileinclude', function() {
  gulp.src(config.src)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(config.dist));
});
