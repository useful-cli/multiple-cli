var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();
var browserSync = require('browser-sync').create();
var del =	require('del');
gulp.task('less', function () {
    gulp.src(['src/less/main.less','!src/less/extend/{reset,test}.less'])
    		.pipe(plugins.plumber({errorHandler: plugins.notify.onError('Error: <%= error.message %>')}))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(plugins.sourcemaps.write())
        .pipe(plugins.cssmin())
        .pipe(gulp.dest('dist/css'))
        .pipe(plugins.notify({ message: 'Styles task complete' }))
        .pipe(browserSync.stream());
});
 
gulp.task('lesswatch', function () {
    gulp.watch('src/**/*.less', ['less']);
});

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src(['src/js/*js', '!src/lib/*.js'])
        .pipe(plugins.concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(plugins.notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')	
		.pipe(plugins.cache(plugins.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/assets/img'))
    .pipe(plugins.notify({ message: 'Images task complete' }));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('clean', function(cb) {
    del(['dist/css', 'dist/js', 'dist/img'], cb)
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
	 	gulp.watch("src/less/*.less", ['lesswatch']);
	 	gulp.watch("src/js/*.js", ['js-watch']);
	  gulp.watch("src/*.html").on('change', browserSync.reload);
});

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['js', 'less', 'browser-sync'], function () {

});

gulp.task('default', function() {

});