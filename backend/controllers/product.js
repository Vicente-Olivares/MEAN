'use strict';

let Product = require('../models/product');

function test(req,res){
    res.status(200).send({message:'message from the product controller'});
}

function saveProduct(req,res){
    let product = new Product();
    let params = req.body;

    product.name = params.name;
    product.description = params.description;
    product.brand = params.brand;
    product.price = params.price;
    product.image = 'null';

    product.save((error, savedProduct)=>{
        if(error){
            res.status(500).send({message:'Rhere is an error on the server'});
        } else {
            if(!savedProduct){
                res.status(404).send({message: 'The information is incomplete'});
            }else{
                res.status(200).send({product:savedProduct});
            }
        }
    });
}

module.exports ={
    test,
    saveProduct
}