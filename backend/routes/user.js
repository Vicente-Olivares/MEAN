'use strict';

let express = require('express');
let api = express.Router();
let UserController = require('../controllers/user');

api.get('/test', UserController.test);

api.post('/user', UserController.saveUser);

api.get('/user',UserController.getUsers);

api.put('/user/:id',UserController.updateUser);

api.delete('/user/:id',UserController.deleteUser);

module.exports = api;