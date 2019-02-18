'use strict';

let express = require('express');

let StoreController = require('../controllers/store');

let api = express.Router();
let md_auth = require('../middleware/authenticated');

api.get('/storeTest', StoreController.test);

api.post('/store', StoreController.saveStore);

api.get('/store',StoreController.getStore);