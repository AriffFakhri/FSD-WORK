const express = require('express');
const router = express.Router(); 

router.post('/' , (req, res, next)=>{
    const cart ={
        cart: req.body.cart,
        price: req.body.price, 
        Cartno: req.body.Cartno,
     };
    res.status(200).json ({
    message: 'handling post request /products',
    createdcart: cart
   
}); 
    
});

router.get('/:cartid' , (req, res, next)=>{
    const id = req.params.cartid;
    if (id === 'special'){
        res.status(200).json({
            message: 'Here is your special cart',
            id: id,
        })
    }else{
        res.status(200).json({
            message: 'You passed the id'
        })
    }
});

router.patch('/:cartid' , (req, res, next)=>{
    res.status(200).json({
        message: 'updated cart'
    });
});

router.delete('/:cartid' , (req, res, next)=>{
    res.status(200).json({
        message: 'deleted cart'
    });
})

router.put('/:cartid' , (req, res, next)=>{
    res.status(200).json({
        message: ' cart updated',
        Cartid:req.params.cartid,
    });
});





module.exports = router;