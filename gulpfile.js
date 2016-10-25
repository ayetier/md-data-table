'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass',  () => {
  return gulp.src('./src/styles/md-table.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/**/*.scss', ['sass']);
});

const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat-js");

gulp.task("build", function () {
  return gulp.src(["dist/src/*.{js,json}", "dist/src/**/*.{js,json}"])
    .pipe(sourcemaps.init())
    .pipe(concat({
      "target": "md-table.js", // Name to concatenate to
      "entry": "./index.js" // Entrypoint for the application, main module
                           // The `./` part is important! The path is relative to
                           // whatever gulp decides is the base-path, in this
                           // example that is `./lib`
    }))
    .pipe(gulp.dest("dist"));
});
