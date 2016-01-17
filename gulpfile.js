var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    rename = require('gulp-rename');

gulp.task('sass', function() {
    gulp.src('./scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(prefix())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
