var gulp = require("gulp");
var gulpSequence = require('gulp-sequence');
var webpack = require("gulp-webpack");
var inject = require("gulp-inject");
var watch = require("gulp-watch");
var clean = require("gulp-clean");

var src = 'src/';
var dist = 'dist/';

// var getConfig = require('./webpack.config.js');
// gulp.task("js",function(){
//   var bundleStream = webpack(getConfig);
//   return gulp.src(src + 'index.html')
//   .pipe(inject(bundleStream))
//   .pipe(gulp.dest(dist));
// });
gulp.task("html",function(){
  return gulp.src("./src/main.html")
  .pipe(gulp.dest("./dist"))
});
gulp.task("clean",function(){
  return gulp.src("./dist/*.js")
  .pipe(clean());
});
// gulp.task("default",gulpSequence("html","clean"));
