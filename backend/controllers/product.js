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
            res.status(500).send({message:'There is an error on the server'});
        } else {
            if(!savedProduct){
                res.status(404).send({message: 'The information is incomplete'});
            }else{
                res.status(200).send({product:savedProduct});
            }
        }
    });
}

function getProduct(req,res){
    Product.find((error,products)=>{
        if(error){
            res.status(500).send({message:'There is an error on the server '});
        }else{
            if(!products){
                res.satus(404).send({message:'Information not found'});
            }else {
                res.status(200).send({product:products});
            }
        }
    });
}

function updateProduct(req,res){
    let productId = req.params.id;
    let params = req.body;

    Product.findByIdAndUpdate(productId,params,(error,updatedProduct)=>{
        if(error){
            res.status(500).send({message:'There is an error on the server '});
        }else{
            if(!updatedProduct){
                res.satus(404).send({message:"The product doesn't exist"});
            }else {
                res.status(200).send({product:updatedProduct});
            }
        }
    });
}

function deleteProduct(req,res){
    let productId = req.params.id;

    Product.findByIdAndRemove(productId,(error,deletedProduct)=>{
        if(error){
            res.status(500).send({message:'There is an error on the server '});
        }else{
            if(!deletedProduct){
                res.satus(404).send({message:"The product doesn't exist"});
            }else {
                res.status(200).send({product:deletedProduct});
            }
        }
    });
}

module.exports ={
    test,
    saveProduct,
    getProduct,
    updateProduct,
    deleteProduct
}