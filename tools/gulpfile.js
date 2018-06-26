var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var cssmin = require('gulp-cssmin');
var replace = require('gulp-replace');
var browserSync = require('browser-sync').create();


gulp.task('dev', function () {
    browserSync.init({
        browser: ["google-chrome"/*, "firefox"*/],
        proxy:{
            target: "http://dopoverstka/"
        },
        notify: false,
        reloadDelay: 1000,
        serveStatic: ['../public/css'],
        rewriteRules:[
            {
                match: new RegExp('/cache/.*.css'),
                fn:function () {
                    return '/dev.css'
                }
            }
        ]
    });
    gulp.watch( '../public/source/dev/**/*.less', ['style']);
});

function convert(string) {
  return strToInt(string);
}


gulp.task('style', function () {
   return gulp.src('../public/css/dev/*.less')
       .pipe(plumber())
       .pipe(less())
       .pipe(autoprefixer())
       .pipe(gulp.dest('../public/css'))
       .pipe(browserSync.reload({stream:true}));
});