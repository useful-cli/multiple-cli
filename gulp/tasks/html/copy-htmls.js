var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var config = require('../../../config').html;
// process JS files and return the stream.
gulp.task('copy:htmls', function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.view))
        .pipe(plugins.notify({ message: 'HTML task complete' }));
});