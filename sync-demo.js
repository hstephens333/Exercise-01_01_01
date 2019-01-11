/*
   Exercise-01_01_01

   Filename: sync-demo.js
   Name: Harrison Stephens
*/

var fs = require('fs'); //! File system package (object name is the same as the variable).

var data = fs.readdirSync('/'); //! holds data from the file
console.log("data: ", data);

console.log("This code is executed last.");