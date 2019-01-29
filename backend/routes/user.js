'use strict';

let express = require('express');
let api = express.Router();
let UserController = require('../controllers/user');

api.get('/test', UserController.test);

module.exports = api;