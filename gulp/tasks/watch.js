var gulp   = require('gulp');
var config = require('../../config').watch;
var browsersync = require('browser-sync');
/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.lessstyles,  ['less']);
  gulp.watch(config.scripts, ['simple-scripts']);
  gulp.watch(config.images,  ['images']);
  gulp.watch(config.html,  ['copy:index', 'fileinclude']);
  gulp.watch(config.libscripts, ['lib-scripts']);
  gulp.watch(config.disthtml).on("change", browsersync.reload);
  gulp.watch("dist/view/*.html").on("change", browsersync.reload);
  gulp.watch("dist/assets/css/main.css").on("change", browsersync.reload);
  gulp.watch("dist/assets/js/*.js").on("change", browsersync.reload);
});