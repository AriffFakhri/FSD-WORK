const express = require('express');
const app = express();
const morgan = require('morgan');

// app.use((req, res, next)=>{
//     res.status(200).json({
//         // message: 'it is working';
//         name: 'Ariff',
//         age: '25',
//         Id: '389147810131',
//         address: 'oklohama',
//         status: 'single',



//     });
 
// });



const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const menuRoutes = require('./api/routes/menu');
const userRoutes = require('./api/routes/users');
const cartRoutes = require('./api/routes/cart');

const bodyparser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use('/products' , productRoutes);
app.use('/orders' , orderRoutes);
app.use('/users' , userRoutes);
app.use('/menu' , menuRoutes);
app.use('/cart' , cartRoutes);

app.use((req, res, next)=> {
    const error = new Error('not found');
    error.status404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});

module.exports = app;
