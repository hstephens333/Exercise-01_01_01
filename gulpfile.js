/*
   Exercise-01_01_01

   Filename: gulpfile.js
   Name: Harrison Stephens
*/

//! Varibale set to required to allow the use of gulp from its global modules
var gulp = require('gulp'); 

//! call to the default task method from gulp to run an anonymous function
gulp.task('default', async function() { 
   console.log("Hello from gulp!");
});