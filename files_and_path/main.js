const fs = require('fs');

// this is synchronous - to write a file
// fs.writeFileSync("example.txt", "this is an example file"); 

//append to a file
fs.appendFile("example.txt", "\n this is appended text", ()=>{
    console.log("appended")
})

//this is asynchronous - to write a file and read it
fs.writeFile("example.txt", "hello this is again from example file", ()=>{
    console.log("done")
    fs.readFile("example.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

// to rename a file
// fs.rename("example.txt", "newExample.txt", ()=>{
//     console.log("renamed")
// })

// to delete a file
// fs.unlink("newExample.txt", ()=>{
//     console.log("deleted")
// })