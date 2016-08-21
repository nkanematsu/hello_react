var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    watch   = require('gulp-watch'),
    webpack = require('webpack-stream');

gulp.task('webpack', function () {
  return gulp.src('')
    .pipe(plumber(function (error) {
      return this.emit('end');
    }))
    .pipe(webpack({
      entry: {
        app: './scripts/app.tsx',
      },
      output: {
        filename: 'bundle.js',
      },
      module: {
        loaders: [
          { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
      }
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  watch(['./scripts/**/*.tsx'], function (event) {
    gulp.start('webpack');
  });
});

gulp.task('default', ['webpack']);
