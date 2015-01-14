var gulp = require('gulp'),
    jshint = require('gulp-jshint');

var paths = {
    js: ['./*js']
};

gulp.task('default', ['watch']);

gulp.task('watch', function(){
  gulp.watch(paths.js, ['jshint']);
});

//JSHint
gulp.task('jshint', function(){
  gulp.src(paths.js)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});
