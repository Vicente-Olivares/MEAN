'use strict';

let User = require('../models/user');

let bcrypt = require('bcrypt-nodejs');

let fs = require('fs');

let path = require('path');

function test(req,res){
    res.status(200).send({message:'message from the controller'});
}

function getUsers(req,res){
    User.find((err,users)=>{
        if(err){
            res.status(500).send({message:'There is an error on the server'});
        }else{
            if(!users){
                res.status(404).send({message:'The user information is incomplete'});
            }else{
                res.status(200).send({users});
            }
        }
    })
}

function saveUser(req,res){
    let user = new User();
    let params = req.body;

    user.name = params.name;
    user.lastName = params.lastName;
    user.email = params.email;
    //user.password = params.password;
    user.rol = 'ADMIN';
    user.image = 'null';

    if(params.password){
        bcrypt.hash(params.password,null,null,(err,hash)=>{
            user.password = hash;
            
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

        });

    }else{
        res.status(404).send({message:'The password field is empty'});
    }
    
}

function updateUser(req,res){
    let userId = req.params.id;
    let params = req.body;

    User.findByIdAndUpdate(userId,params,(error,updatedUser)=>{
        if(error){
            res.status(500).send({message:'There is an error on the server'});
        }else{
            if(!updatedUser){
                res.status(404).send({message:'There user doesn`t exit'});
            }else{
                res.status(200).send({user:updatedUser});
            }
        }
    });
}

function deleteUser(req,res){
    let userId = req.params.id;

    User.findByIdAndRemove(userId, (error,deletedUser)=>{
        if(error){
            res.status(500).send({message:'There is an error on the server'});
        }else{
            if(!deletedUser){
                res.status(404).send({message:'There user doesn`t exit'});
            }else{
                res.status(200).send({user:deletedUser});
            }
        }
    });
}

function saveUserImage(req,res){
    let userId = req.params.id;
    let fileName = 'No Subido ...';

    if(req.files){
        //console.log(req.files);
        let filePath = req.files.image.path;
        let fileSplit = filePath.split('\\');
        
    }else{
        res.status(404).send({message: 'Please upload an image'});
    }
}

module.exports = {
    test,
    saveUser,
    getUsers,
    updateUser,
    deleteUser,
    saveUserImage
}
