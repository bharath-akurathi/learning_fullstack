const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact me!')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params) // will output { slug: 'intro-to-padosi' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }
    res.send(`hello ${req.params.slug}`)
})

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