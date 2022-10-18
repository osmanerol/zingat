const { src, dest, watch, series, task, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();

const sassTask = () => {
  return src(['assets/sass/**/*.sass'])
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(rename({ 
      suffix: '.min'
    }))
   .pipe(dest('public/stylesheets'));
}

const jsTask = () => {
  return src(['assets/js/**/*.js'])
    .pipe(concat('all.js'))
    .pipe(minify({
      ext: {
        min: '.min.js'
      },
      noSource: true
    }))
    .pipe(dest('public/javascripts'));
}

const watchTask = () => {
  watch(['assets/js/**/*.js'], series(jsTask));
  watch(['assets/sass/**/*.sass'], series(sassTask));
}

const serve = () => {
  return browserSync.init(null, {
    proxy: 'http://localhost:5000',
    files: ['assets/**/*.*', 'views/**/*.*'],
    port: 5001
  });
}

const nodemonServe = () => {
  return nodemon({
    script: 'app'
  }) 
}

exports.default = parallel(
  jsTask,
  sassTask,
  watchTask,
  nodemonServe,
  serve,
)