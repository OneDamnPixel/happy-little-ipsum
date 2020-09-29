var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    gulp.src('./scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(prefix())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            server: "./"
        }
    });

    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
    gulp.watch("./*.html").on('change', browserSync.reload);
});



gulp.task('default', gulp.series('serve'));
