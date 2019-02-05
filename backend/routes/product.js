'use strict';

let ProductController = require('../controllers/product');

let express = require('express');

let api = express.Router();

api.get('/product', ProductController.test);

api.post('/product', ProductController.saveProduct);

module.exports = api;
