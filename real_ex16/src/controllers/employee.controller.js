const Employee = require('../models/employee.model')

exports.generateEmployees = async (req, res) => {
    const names = ["Harry", "John", "Ron", "Hermione", "Sally", "Max", "Eve", "Charlie", "Dave", "Lucy"]
    const languages = ["Python", "JavaScript", "Java", "C#", "Ruby", "Go"]
    const cities = ["New York", "Los Angeles", "Chicago", "Houston"]

    // await Employee.deleteMany({})

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

    await Employee.insertMany(employees)

    res.status(201).json({
        success: true,
        count: employees.length,
        message: 'Employees generated'
    })
}

exports.clearEmployees = async (req, res) => {
    const result = await Employee.deleteMany({})

    res.json({
        success: true,
        deleted: result.deletedCount
    })
}

