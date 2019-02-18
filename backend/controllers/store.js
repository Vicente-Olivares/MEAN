'use strict';

let Store = require('../models/store');

function test(req,res){
    res.status(200).send({message: 'Message from the store controller'});
}

function saveStore(req,res){
    let store = new Store();
    let params = req.body;

    store.name = params.name;
    store.address = params.address;
    store.zipCode = params.zipCode;
    store.city = param.city;
    store.contact = params.contact;
    store.email = params.email;

    Store.save((err,savedStore)=>{
        if(err){
            res.status(500).send({message: 'There is an error on the server'});
        }else{
            if(!savedStore){
                res.status(404).send({message: 'The information is incomplete'});
            }else{
                res.status(200).send({store:savedStore});
            }
        }
    });
}

function getStore(req,res){
    Store.find((err,stores)=>{
        if(err){
            res.status(500).send({message: 'There is an error on the server'});
        }else{
            if(!stores){
                res.status(404).send({message: 'The stores collection is empty'});
            }else{
                res.status(200).send({stores});
            }
        }
    });
}

function updateStore(req,res){
    let storeId = req.params.id;
    let params = req.body;
    
    Store.findByIdAndUpdate(storeId,params,(error,updatedStore)=>{
        if(error){
            res.status(500).send({message: 'There is an error on the server'});
        }else{
            if(!updatedStore){
                res.status(404).send({message: 'The stores doesn´t exist'});
            }else{
                res.status(200).send({updateStore});
            }
        }

    });

    
    
}

function deleteStore(req,res){
    let storeId = req.params.id;

    Store.findByIdAndRemove(storeId,(error,deletedStore)=>{
        if(error){
            res.status(500).send({message: 'There is an error on the server'});
        }else{
            if(!deletedStore){
                res.status(404).send({message: 'The stores doesn´t exist'});
            }else{
                res.status(200).send({deletedStore});
            }
        }
    });
}

module.exports={
    test,
    saveStore,
    getStore,
    updateStore,
    deleteStore
}