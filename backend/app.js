'use strict';

let express = require('express');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let app = express();

//LOAD ROUTES
let UserRoutes = require('./routes/user');


//HEADERS CONFIGURATIONS (CORS)


app.use('/system', UserRoutes);

module.exports = app;