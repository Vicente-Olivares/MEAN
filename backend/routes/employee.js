'use strict';

let express = require('express');
let EmployeeController = require('../controllers/employee');

let api = express.Router();

api.get('/employeeTest', EmployeeController.test);

api.post('/employee', EmployeeController.saveEmployee);

api.get('/employee/:id?', EmployeeController.getEmployees);

api.put('/employee/:id', EmployeeController.updateEmployee);

api.delete('/employee/:id', EmployeeController.deletedEmployee);

module.exports = api;