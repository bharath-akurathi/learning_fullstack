require('dotenv').config()
const express = require('express')

// express app setup
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

// routes
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
    // res.json({ mssg: "Hello World!" })
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('Server is running on http://localhost:4000');
})