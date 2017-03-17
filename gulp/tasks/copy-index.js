var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var config = require('../../config').html;
// process JS files and return the stream.
gulp.task('copy:index', function () {
    return gulp.src(config.index)
        .pipe(gulp.dest(config.dist))
        .pipe(plugins.notify({ message: 'Index task complete' }));
});