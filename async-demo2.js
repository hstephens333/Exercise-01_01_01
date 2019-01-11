/*
   Exercise-01_01_01

   Filename: async-demo2.js
   Name: Harrison Stephens
*/

var fs = require('fs'); //! File system package (object name is the same as the variable).

fs.readdir('/', function (err, data) { //! locates the file directory and runs the function as anonymous
   console.log("data: ", data); //! displays stored data from the function
}); 

console.log("This code is executed last.");