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
            (!savedEmployees)? res.status(404).send({message:'The employees is empty'}) :
            res.status(200).send({employee:savedEmployees});
        }
    });

}

function getEmployees(req,res){
    let employeeId = req.params.id;
    let find = (!employeeId)? Employee.find() : Employee.findById(employeeId);
    
    /* Employee.find((error,employees)=>{
        (error)? res.status(500).send({message: 'There is an error on the server'}) :
        (!employees)? res.status(404).send({message: 'The collection employee doesn´t exist'}) :
        res.status(200).send({employees});
    }); */

    find.populate({path:'store'}).exec(((error,employees)=>{
        (error)? res.status(500).send({message: 'There is an error on the server'}) :
        (!employees)? res.status(404).send({message: 'The collection employee doesn´t exist'}) :
        res.status(200).send({employees});
    }));
}

function updateEmployee(req,res){
    let employeeId = req.params.id;
    let params = req.body;

    Employee.findByIdAndUpdate(employeeId,params,(error,updatedEmployee)=>{
        (error)? res.status(500).send({message:'There is an error on the server'}) :
        (!updatedEmployee)? res.status(404).send({message:'The employee doesn´t exist'}) :
        res.status(200).send({updatedEmployee});
    });
}

function deleteEmployee(req,res){
    let employeeId = req.params.id;

    Employee.findByIdAndRemove(employeeId,(err,deletedEmployee)=>{
        (err)? res.status(500).send({message:'There is an error on the server'}) :
        (!deletedEmployee)? res.status(404).send({message: 'The employee doesn´t exist'}) :
        res.status(200).send({deletedEmployee});
    });

}

module.exports={
    test,
    saveEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee
}