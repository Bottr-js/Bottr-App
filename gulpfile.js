var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('default', function() {
  return gulp.src('web/index.js')
  .pipe(webpack({
      output: {
        filename: '[name].js',
      },
      module: {
        loaders: [{
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel'
        }]
      }
  }))
  .pipe(gulp.dest('web/res/'))
});
