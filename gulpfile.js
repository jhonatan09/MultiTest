const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename') ;
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


gulp.task('sass', function(){
    gulp.src('src/sass/modal-home.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe( rename ({suffix: '.min'} ))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function(){
    gulp.src('src/html/*html')
    .pipe(gulp.dest('dist'));
})

gulp.task('minifyJs', function(){
    gulp.src('src/js/*js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
})


gulp.task('image', function(){
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
})

gulp.task('server', function(done) {
    gulp.watch('src',gulp.parallel(['sass', 'html', 'minifyJs', 'server',]));
    done();
});


gulp.task('default', gulp.parallel(['sass', 'server', 'html', 'minifyJs','image']), function(){
    return run('npm run gulp').exec();
});

