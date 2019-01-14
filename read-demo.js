/*
   Exercise-01_01_01

   Filename: read-demo.js
   Name: Harrison Stephens
*/

//! require the file system to load it in
var fs = require('fs');

//! file system reads data1.json file in . directory and calls it with an anonymous function
fs.readFile('./data1.json', function(err, data) {
   console.log(data);
});