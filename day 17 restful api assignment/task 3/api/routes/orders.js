const express = require('express');
const router = express.Router();

router.get('/' , (req, res, next)=>{
    res.status(200).json({
        message: 'order were fetched'
    });
});

router.post('/' , (req, res, next)=>{
    const order = {
        productid: req.body.productid,
        quantity: req.body.quantity,

    }
    res.status(200).json({
        message: 'order was created',
        order: order,
    });
});

router.get('/:orderid', (req, res, next)=>{
    res.status(200).json({
        message: 'order details',
        orderid:req.params.orderid,
    });
});

router.delete('/:orderid' , (req, res, next)=>{
    res.status(200).json({
        message: 'order deleted',
        orderid:req.params.orderid,
    });
});
router.patch('/:orderid' , (req, res, next)=>{
    res.status(200).json({
        message: 'order patched',
        orderid:req.params.orderid,
    });
});
router.put('/:orderid' , (req, res, next)=>{
    res.status(200).json({
        message: 'order updated',
        orderid:req.params.orderid,
    });
});

module.exports=router;