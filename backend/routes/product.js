'use strict';

let ProductController = require('../controllers/product');
let express = require('express');
let api = express.Router();
let md_auth = require('../middleware/authenticated');

api.get('/product',md_auth.ensureAuth,ProductController.getProducts);
api.post('/product',md_auth.ensureAuth,ProductController.saveProduct);
api.put('/product/:id',md_auth.ensureAuth,ProductController.updateProduct);
api.delete('/product/:id',md_auth.ensureAuth,ProductController.deleteProduct);
module.exports = api;