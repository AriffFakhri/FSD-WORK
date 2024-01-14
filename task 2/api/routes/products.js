const express = require('express');
const router = express.Router(); 

router.get('/' ,(req, res, next)=>{
res.status(200).json ({
    message: 'handling get request /products'
});  

});

router.post('/' , (req, res, next)=>{
    // const product ={
    //     name: req.body.name,
    //     price: req.body.price, 
    //     Productname: req.body.Productname,
    //  };
    res.status(200).json ({
    message: 'handling post request /products',
    // createdProduct: product
   
}); 
    
});

router.get('/:productid' , (req, res, next)=>{
    const id = (req.params.productid);
    if (id === 'ariff' ){
        res.status(200).json({
            message: 'HELLO!!!!',
            id: id + ' you are awesome',
        })
    }else if(id == 'mirae' ){
        res.status(200).json({
            message: 'HI'
        })
    }else{
        res.status(200).json({
            message: 'who are you??'
        })
    }
});

router.post('/:productid' , (req, res, next)=>{
    const id = req.params.productid;
    if (id ==='ariff' ){
        res.status(200).json({
            message: 'You are eligible to enter this website',
            id: id + 'you are awesome',
        })
    }else if(id == 'mirae'){
        res.status(200).json({
            message: 'You are not awesome'
        })
    }else{
        res.status(200).json({
            message: 'You are not eligible to enter this website'
        })
    }
});











// router.patch('/:productid' , (req, res, next)=>{
//     res.status(200).json({
//         message: 'updated product'
//     });
// });

// router.delete('/:productid' , (req, res, next)=>{
//     res.status(200).json({
//         message: 'deleted product'
//     });
// })

// router.put('/:productid' , (req, res, next)=>{
//     res.status(200).json({
//         message: ' product updated',
//         productid:req.params.orderid,
//     });
// });





module.exports = router;