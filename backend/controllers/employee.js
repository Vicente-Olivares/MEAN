'use strict';

let Employee = require('../models/employee');

function test(req,res){
    res.status(200).send({message:'Message from the controller employee'});
}

function saveEmployee(req,res){
    let employee = new Employee();
    let params = req.body;

    employee.name = params.name;
    employee.lastName = params.lastName;
    employee.age = params.age;
    employee.email = params.email;
    employee.jobTitle = params.jobTitle;
    employee.store = params.store;

    employee.save((error,savedEmployees)=>{
        if(error){
            res.status(500).send({message: 'There is an error on the server'});
        }else{
            (!employees)? res.status(404).send({message:'The employees is empty'}) :
            res.status(200).send({employee:savedEmployees});
        }
    });

}

function getEmployees(req,res){
    Employee.find((error,employees)=>{
        (error)? res.status(500).send({message: 'There is an error on the server'}) :
        (!employees)? res.status(404).send({message: 'The collection employee doesn´t exist'}) :
        res,status(200).send({employees});
    });
}

module.exports={
    test,
    saveEmployee,
    getEmployees
}