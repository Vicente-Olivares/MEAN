'use strict';

let mongoose = require('mongoose');

let app = require('./app');

const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/store',(err)=>{
    if(err){
        console.log('Hay un Error en la conexión');
    }else{
        console.log('Base de Datos en Linea');

        app.listen(PORT,(error)=>{
            (error)? console.log('No se puede levantar') : console.log('Servidor Web en Linea');
        });
    }
});
