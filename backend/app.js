'use strict';

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//load Routes
let UserRoutes = require('./routes/user');
let ProductRoutes = require('./routes/product');
let StoreRoutes = require('./routes/store');
let EmployeeRoutes = require('./routes/employee');

//headers configurations

app.use(function (req, res, next) {
    /*var err = new Error('Not Found');
     err.status = 404;
     next(err);*/
  
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    // Pass to next layer of middleware
    next();
  });

app.use('/system',UserRoutes);
app.use('/system',ProductRoutes);
app.use('/system',StoreRoutes);
app.use('/system',EmployeeRoutes);

module.exports = app;


