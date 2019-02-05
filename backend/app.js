'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//LOAD ROUTES
let UserRoutes = require('./routes/user');

let ProductRoutes = require('./routes/product');


//HEADERS CONFIGURATIONS (CORS)


app.use('/system', UserRoutes);
app.use('/system', ProductRoutes);

module.exports = app;