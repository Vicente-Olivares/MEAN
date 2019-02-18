'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let storeSchema = Schema({
    name:String, //<- Sucursal de la tienda 
    address:String,
    zipCode:Number,
    city:String,
    contact:String,
    email:String
});

module.exports = mongoose.model('store', storeSchema);