'use strict';

let express = require('express');

let app = express();

//LOAD ROUTES
let UserRoutes = require('./routes/user');


//HEADERS CONFIGURATIONS (CORS)


app.use('/system', UserRoutes);

module.exports = app;