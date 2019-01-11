/*
   Exercise-01_01_01

   Filename: async-demo.js
   Name: Harrison Stephens
*/

var fs = require('fs'); //! File system package (object name is the same as the variable).

function phoneNumber(err, data) { //! Function 
   console.log("data: ", data);
}

fs.readdir('/', phoneNumber); //! locates the file directory and runs the phoneNumber function

console.log("This code is executed last.");
