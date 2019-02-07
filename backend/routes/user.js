'use strict';

let express = require('express');
let api = express.Router();
let UserController = require('../controllers/user');

let multiparty = require('connect-multiparty');
let md_upload = multiparty({uploadDir:'./uploads/users'});

api.get('/test', UserController.test);

api.post('/user', UserController.saveUser);

api.get('/user', UserController.getUsers);

api.put('/user/:id', UserController.updateUser);

api.delete('/user/:id', UserController.deleteUser);

api.put('/userImage/', md_upload, UserController.saveUserImage);

module.exports = api;