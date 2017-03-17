const gulp = require('gulp');
const rev = require('gulp-rev');
const revCollector = require('gulp-rev-collector');

gulp.task('rev',function(){
    return gulp.src(['dist/assets/rev/**/*.json','dist/view/*.html'])
    .pipe(revCollector())
    .pipe(gulp.dest('dist/view'));
});