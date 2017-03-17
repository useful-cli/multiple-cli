var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var browsersync = require('browser-sync').create(); 
var reload = browsersync.reload;
var config = require('../../../config').scripts;
// process JS files and return the stream.
gulp.task('simple-scripts', function () {
    return gulp.src([config.src, config.ignore])
    	  .pipe(plugins.jshint())
        .pipe(plugins.concat('main.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(plugins.rev())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(plugins.rev.manifest({
        		merge: true
         }))
        .pipe(gulp.dest('dist/assets/rev/js'))
        .pipe(plugins.notify({ message: 'Scripts task complete' }))
        .pipe(reload({stream: true}));
});