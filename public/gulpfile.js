'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var debug = require('gulp-debug');
 
gulp.task('sass', function () {
  return gulp.src('./public/sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(debug())
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./public/sass/*.scss', ['sass']);
});