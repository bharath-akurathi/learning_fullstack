import fs from "fs/promises"

let a = await fs.readFile("example.txt")
// console.log(a)
console.log(a.toString())
let b = await fs.appendFile("example.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)