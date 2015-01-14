var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    qunit = require('node-qunit-phantomjs');

var paths = {
    js: ['./*js', './test/*.js'],
};

gulp.task('default', ['watch']);

gulp.task('watch', function(){
  return gulp.watch(paths.js, ['jshint', 'qunit']);
});

//JSHint
gulp.task('jshint', function(){
  return gulp.src(paths.js)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

//QUnit
gulp.task('qunit', function(){
  return qunit('./test/index.html');
});
