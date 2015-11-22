/**
 * Created by migue on 22/11/15.
 */

var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var minifyHTML = require('gulp-minify-html');

gulp.task('default', function () {

    var minify_opts = {
        conditionals: true,
        spare: true
    };
    nunjucksRender.nunjucks.configure(['./'], {watch: false});
    return gulp.src('pages/*.html')
        .pipe(nunjucksRender())
        .pipe(minifyHTML(minify_opts))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
    gulp.watch('templates/*.html', ['default']);
    gulp.watch('pages/*.html', ['default']);
});