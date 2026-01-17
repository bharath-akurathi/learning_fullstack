const express = require('express')
const {
    generateEmployees,
    clearEmployees
} = require('../controllers/employee.controller')

const router = express.Router()

router.post('/generate', generateEmployees)
router.delete('/clear', clearEmployees)

module.exports = router

