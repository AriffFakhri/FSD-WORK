const express = require('express');
const router = express.Router(); 

router.get('/' ,(req, res, next)=>{
res.status(200).json ({
    message: 'handling get request /products'
});  

});

router.post('/' , (req, res, next)=>{
    res.status(200).json ({
    message: 'handling post request /products'
   
}); 
    
});

router.get('/:productid' , (req, res, next)=>{
    const id = req.params.productid;
    if (id === 'special'){
        res.status(200).json({
            message: 'Here is your special id',
            id: id,
        })
    }else{
        res.status(200).json({
            message: 'You passed the id'
        })
    }
})

router.get('/:productid' , (req, res, next)=>{
    const id = req.params.productid;
    if (id === 'special'){
        res.status(200).json({
            message: 'Here is your special id',
            id: id,
        })
    }else{
        res.status(200).json({
            message: 'You passed the id'
        })
    }
})







module.exports = router;