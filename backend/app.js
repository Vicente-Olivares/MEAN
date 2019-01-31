'use strict';

let express = require('express');
let bodyParser = require('body-parser');
<<<<<<< HEAD
let app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


=======

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let app = express();
>>>>>>> d09e9c5df3f5a6a14f16bac319991124cc857c4d

//LOAD ROUTES
let UserRoutes = require('./routes/user');


//HEADERS CONFIGURATIONS (CORS)


app.use('/system', UserRoutes);

module.exports = app;