/**
 * Created by migue on 22/11/15.
 */

var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('default', function () {
    nunjucksRender.nunjucks.configure(['./'], {watch: false});
    return gulp.src('pages/*.html')
        .pipe(nunjucksRender())
        .pipe(gulp.dest('.'));
});