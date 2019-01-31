'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//LOAD ROUTES
let UserRoutes = require('./routes/user');


//HEADERS CONFIGURATIONS (CORS)


app.use('/system', UserRoutes);

module.exports = app;