var gulp = require("gulp"),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin');


// HTML Task

gulp.task('html',async function(){

  return gulp.src('./public/*.html')
        .pipe(gulp.dest('dist'))

});


// Image task

gulp.task('image' , async function(){
  return gulp.src('./public/images/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

// Useref task

gulp.task('useref',async function(){
  return gulp.src('./public/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js' , uglify()))
        .pipe(gulpIf('*.css' , cssnano()) )
        .pipe(gulp.dest('dist'))
});

// Watch task

gulp.task('watch' , function(){

  gulp.watch('./public/*.html' , gulp.series('html'));
  gulp.watch('./public/*.html' , gulp.series('useref'));

});