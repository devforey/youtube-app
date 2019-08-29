'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('html', function () {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
});

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public'));
});

gulp.task('dev', function () {
    gulp.watch('./src/**/*.scss', gulp.series('sass'));
    gulp.watch('./index.html', gulp.series('html'));
});
