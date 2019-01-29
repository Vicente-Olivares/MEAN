'use strict';

let User = require('../models/user');

function test(req,res){
    res.status(200).send({message:'message from the controller'});
}

module.exports = {
    test
}