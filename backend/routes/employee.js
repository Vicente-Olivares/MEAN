'use strict';

let express = require('express');
let EmployeeController = require('../controllers/employee');

let api = express.Router();

api.get('/employeeTest', EmployeeController.test);

api.post('/employee', EmployeeController.saveEmployee);

api.get('/employee', EmployeeController.getEmployees);

module.exports = api;