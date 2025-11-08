const path = require("path");

// console.log(path);

const filePath = "D:/Backend/Sla_Node/Day_3/Path";

console.log( "Directory Name:", path.dirname(filePath) );

console.log( "path Name:", path.basename(filePath) );

console.log( "Extension : " , path.extname(filePath) )