const gulp = require('gulp');
const sass = require('gulp-sass');



gulp.task('hello', function (done) {
    console.log('hello from gulp');
    done();
    });


// gulp.task('task-name', function () {   
//     return gulp.src('source-files')  //Get source files
//             .pipe(aGulpPlugin())     //Send it through a gulp plugin
//             .pipe(gulp.dest('destination'))  //Output to destination
//     })

gulp.task('sass', function () {   
    return gulp.src('Gulp/Chabod-styles/Chabod-scss/chabod.scss')
            .pipe(sass())
            .pipe(gulp.dest('Gulp/Chabod-styles/Chabod-css')) 
    })

gulp.task('watch', function() {
    gulp.watch('Gulp/Chabod-styles/Chabod-scss/chabod.scss', gulp.series('sass'));
})