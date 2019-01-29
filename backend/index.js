'use strict';

let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/store',(err)=>{
    if(err){
        console.log('Hay un Error en la conexión')
    }else(
        console.log('Base de Datos en Linea')
    )
});
