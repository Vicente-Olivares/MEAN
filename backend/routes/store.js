'use strict';

let express = require('express');
let StoreController = require('../controllers/store');

let api = express.Router();
let md_auth = require('../middleware/authenticated');

api.get('/storeTest',md_auth.ensureAuth, StoreController.test);
api.post('/store',md_auth.ensureAuth, StoreController.saveStore);
api.get('/store',md_auth.ensureAuth,  StoreController.getStore);
api.put('/store/:id',md_auth.ensureAuth, StoreController.updateStore);
api.delete('/store/:id',md_auth.ensureAuth,  StoreController.deleteStore);

module.exports = api;