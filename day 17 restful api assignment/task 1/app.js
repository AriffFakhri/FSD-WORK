const express = require('express');
const app = express();

app.use((req, res, next)=>{
        res.status(200).json({
            // message: 'it is working';
            name: 'Ariff',
            age: '25',
            Id: '389147810131',
            address: 'oklohama',
            status: 'single',
    
    
    
        });
     
    });

    module.exports = app;