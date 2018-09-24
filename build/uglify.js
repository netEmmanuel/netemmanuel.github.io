const eslint = require('gulp-eslint');
// const uglify   = require('gulp-uglify');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const jsPath = '_scripts/*.js';
const destPath = '_site/js';

module.exports = gulp => {

  gulp.task('uglify', function () {
    return gulp.src(jsPath).
    pipe(babel({
      presets: ['env']
    })).
        pipe(eslint({
          useEslintrc: true
        })).
         pipe(uglify().
          pipe(gulp.dest(destPath)).
          pipe(gulp.dest('js')));
});
};
