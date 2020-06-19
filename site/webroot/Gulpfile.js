var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var less = require('gulp-less');
var path = require('path');

var defaults = ['less'];

gulp.task('watch', defaults, function(){

    var files = [
                // LESS
                'assets/less/*.less'
    ];

    watch(files, function () {
    
          gulp.start('less');
    });
});

gulp.task('less', function(){

    return gulp.src('assets/less/**/*.less')
    .pipe(less({ compress: false }))
    .pipe(gulp.dest('assets/css'));
});

