var gulp   = require('gulp');
var del    = require('del');
var config = require('../../../config').prodel;
/**
 * Delete folders and files
 */
gulp.task('pro-delete', function(callback) {
  return del(config.dist, callback);
});