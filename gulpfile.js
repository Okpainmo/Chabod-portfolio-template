// variables
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sassPartialsImported = require('gulp-sass-partials-imported');

// const browserSync = require('browser-sync').create();


// custom-hello task
gulp.task('hello', function (done) {
    console.log('hello from gulp');
    done();
    });


// gulp.task('task-name', function () {   
//     return gulp.src('source-files')  //Get source files
//             .pipe(aGulpPlugin())     //Send it through a gulp plugin
//             .pipe(gulp.dest('destination'))  //Output to destination
//     })

// sass task
gulp.task('sass', function () {   
    return gulp.src('Gulp/Chabod-styles/Chabod-scss/**/*.scss')
            .pipe(sassPartialsImported('Gulp/Chabod-style/Chabod.scss','Gulp/Chabod-style/Chabod.scss/Chabod-partials'))
            .pipe(sass())
            .pipe(gulp.dest('Gulp/Chabod-styles/Chabod-css')) 
    })

// watch task
gulp.task('watch', function() {
    gulp.watch('Gulp/Chabod-styles/Chabod-scss/**/*.scss', gulp.series('sass'));
})

// autoprefixer task
gulp.task('sass', function () {   
    return gulp.src('Gulp/Chabod-styles/Chabod-scss/**/*.scss')
           .pipe(sass())
           .pipe(autoprefixer())
           .pipe(gulp.dest('Gulp/Chabod-styles/Chabod-css'))
 });

//  gulp.task('serve', function(){
//     browserSync.init({
//         server: 'src',
//         port: 4000
//     });
// })