const express = require('express')
const blogs = require('./routes/blog')
const fs =require('fs')

const app = express()
const port = 3000

// middleware
app.use(express.static('public'))
app.use('/blog',blogs)

// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.harry = "I am harry bhai";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middlware 1")
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.harry = "I am Rohan bhai";
    next()
})

app.get('/', (req, res) => {
    console.log("Get request");
    res.send('Hello World. This is from the get request');
})

app.post('/', (req, res) => {
    console.log("Post request");
    res.send('Hello World. This is from the post request');
})

app.put('/', (req, res) => {
    console.log("Put request");
    res.send('Hello World. This is from the put request');
})

app.get('/about', (req, res) => {
    // res.send('About us')
    res.sendFile('templates/about.html',{root:__dirname})
})

app.get('/download',(req,res)=>{
    res.download('templates/about.html',{root:__dirname})
})

app.get('/contact', (req, res) => {
    res.send('Hello contact me!'+ req.harry)
})

// app.get('/blog', (req, res) => {
//     res.send('Hello blog!')
// })

// app.get('/blog/:slug', (req, res) => {
//     // logic to fetch {slug} from the db
//     // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
//     console.log(req.params) // will output { slug: 'intro-to-padosi' }
//     console.log(req.query) // will output { mode: 'dark', region: 'in' }
//     res.send(`hello ${req.params.slug}`)
// })

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})


// require('dotenv').config()
// const express = require('express')

// // express app setup
// const app = express()

// // middleware
// app.use((req, res, next) => {
//     console.log(req.path, req.method);
//     next()
// })

// // routes
// app.get('/', (req, res) => {
//     res.send('Welcome to the Express Server')
//     // res.json({ mssg: "Hello World!" })
// })

// // listen for requests
// app.listen(process.env.PORT, () => {
//     console.log('Server is running on http://localhost:4000');
// })