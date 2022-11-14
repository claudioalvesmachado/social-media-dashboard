"use strict"

const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const { watch, series} = require("gulp");

const scss_src = "./app/scss/*.scss";
const scss_dist = "./dist/css/"

function buildStyles() {
    return gulp
      .src(scss_src)
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(
        autoprefixer({
          overrideBrowserslist: ["last 2 versions"],
          cascade: false,
        })
      )
      .pipe(cssnano())
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest(scss_dist));
  }

  function watchTask() {
    watch('./app/scss/**/*.scss', buildStyles);
  }
  
  exports.default = series(buildStyles, watchTask);