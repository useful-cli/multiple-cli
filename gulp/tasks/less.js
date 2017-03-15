var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var browsersync = require('browser-sync').create(); 
var reload = browsersync.reload;
var config = require('../../config').less;

gulp.task('less', function (callback) {
    return gulp.src(['src/assets/less/main.less','!src/assets/less/extend/{reset,test}.less'])
    	.pipe(plugins.plumber({errorHandler: plugins.notify.onError('Error: <%= error.message %>')}))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(plugins.sourcemaps.write())
        .pipe(plugins.cssmin())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(plugins.notify({ message: 'Styles task complete' }))
        .pipe(reload({stream: true}));
});