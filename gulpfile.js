'use strict';

var gulp = require('gulp');

gulp.task('html', function () {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
});

gulp.task('dev', function () {
    gulp.watch('./index.html', gulp.series('html'));
});
