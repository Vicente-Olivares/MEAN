'use strict';

let ProductController = require('../controllers/product');

let express = require('express');

let api = express.Router();

api.get('/productTest', ProductController.test);

api.post('/product', ProductController.saveProduct);

api.get('/product', ProductController.getProduct);

api.put('/product/:id', ProductController.updateProduct);

api.delete('/product/:id', ProductController.deleteProduct);

module.exports = api;
