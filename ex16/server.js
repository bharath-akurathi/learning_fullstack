// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 


const express = require('express')
const mongoose = require('mongoose')
const Employees = require('./models/employee.js')

const app = express()
const port = 3000

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/company')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// Generate Dummy Data
app.post('/data', async (req, res) => {
    try {
        const names = ["Harry", "John", "Ron", "Hermione", "Sally", "Max", "Eve", "Charlie", "Dave", "Lucy"]
        const languages = ["Python", "JavaScript", "Java", "C#", "Ruby", "Go", "C++", "Swift", "Kotlin", "PHP"]
        const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"]

        // Clear existing employees
        // await Employees.deleteMany({})

        const employees = []

        for (let i = 0; i < 10; i++) {
            employees.push({
                name: names[Math.floor(Math.random() * names.length)],
                salary: Math.floor(Math.random() * 50000000),
                language: languages[Math.floor(Math.random() * languages.length)],
                city: cities[Math.floor(Math.random() * cities.length)],
                isManager: Math.random() > 0.5
            })
        }

        await Employees.insertMany(employees)

        res.send('10 Employees Generated Successfully')
    } catch (error) {
        console.error(error)
        res.status(500).send('Error generating data')
    }
})

app.delete('/clear', async (req, res) => {
    try {
        const result = await Employees.deleteMany({})
        res.send(`Cleared ${result.deletedCount} employees`)
    } catch (error) {
        console.error(error)
        res.status(500).send('Error clearing employees')
    }
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})