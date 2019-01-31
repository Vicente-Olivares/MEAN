'use strict';

let User = require('../models/user');

function test(req,res){
    res.status(200).send({message:'message from the controller'});
}

function saveUser(req,res){
    let user = new User();
    let params = req.body;

    user.name = params.name;
    user.lastName = params.lastName;
    user.email = params.email;
    user.password = params.password;
    user.rol = 'ADMIN';
    user.image = 'null';

    user.save((error,savedUser)=>{
        if(error){
            res.status(500).send({message:'There is an error on the server'});
        }else{
            if(!savedUser){
                res.status(404).send({message:'The user information is incomplete'});
            }else{
                res.status(200).send({user:savedUser});
            }
        }
    });
}

module.exports = {
    test,
    saveUser
}
