const gulp = require('gulp');
const { parallel } = require('gulp');
const browsersync = require('browser-sync');
const rename = require('gulp-rename');
const uglifycss = require('gulp-uglifycss');
const prefix = require('gulp-autoprefixer');
const svgSprite = require('gulp-svg-sprite');

let autoprefixBrowsers = [
  '> 1%',
  'last 2 versions',
  'firefox >= 4',
  'safari >= 11',
  'opera >= 15',
  'IE 11'
];

function copy() {
  return gulp.src('app/icon/**')
    .pipe(gulp.dest('build/icon'));
}

function browserSync() {
  return browsersync.init({
    server: 'build',
    open: true,
    port: 3000
  });
}

function processHtml() {
  return gulp.src('app/*.html')
    .pipe(gulp.dest('build'))
    .pipe(browsersync.reload({
      stream: true
    })
  );
}

function processJs() {
  return gulp.src('app/js/main.js')
    .pipe(gulp.dest('build/js'))
    .pipe(browsersync.reload({
      stream: true
    })
  );
}

function processCss() {
  return gulp.src('app/css/style.css')
    .pipe(prefix({ browsers: autoprefixBrowsers }))
    .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
      }))
    .pipe(gulp.dest('build/css'))
    .pipe(browsersync.reload({
      stream: true
    })
  );
}

function watch() {
  gulp.watch('app/js/*.js', processJs);
  gulp.watch('app/css/*.css', processCss);
  gulp.watch('app/*.html', processHtml);
}

gulp.task('watch', gulp.series(parallel(browserSync, copy, watch)));
