const express = require('express')
const connectDB = require('./config/db')
const employeeRoutes = require('./routes/employee.routes')

const app = express()

// DB
connectDB()

// Middleware
app.use(express.json())
app.use(express.static('./src/public'))

// Routes
app.use('/api/employees', employeeRoutes)

module.exports = app

