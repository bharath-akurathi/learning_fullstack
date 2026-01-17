const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    salary: { type: Number, required: true },
    language: { type: String, required: true },
    city: { type: String, required: true },
    isManager: { type: Boolean, default: false }
}, { timestamps: true })

module.exports = mongoose.model('Employee', employeeSchema)

