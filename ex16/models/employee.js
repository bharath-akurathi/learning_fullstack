const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    salary : Number,
    language : String,
    city : String,
    isManager : Boolean
});

module.exports = mongoose.model('Employees', employeeSchema);