const path = require("path");

let myPath = "/Users/akurathi/Desktop/Codes/fullstack_learning/files_and_path/path.js"
console.log(path.extname(myPath))

console.log(path.dirname(myPath))
console.log(path.basename(myPath))

// this joins the paths provided and it will take care of / and \ according to OS
// console.log(path.join("c:/", "programs\\harry.txt")) 