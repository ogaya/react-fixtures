var gulp = require('gulp');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var webpackConfig = require('./webpack.config.js');


gulp.task('build', function (cb) {
    return gulp.src('')
    .pipe(webpack(webpackConfig))
    .pipe(uglify())
    .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
    gulp.watch('../src/**/*.*',['build']);
});
