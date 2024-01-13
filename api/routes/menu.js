const express = require('express');
const router = express.Router(); 

router.post('/' , (req, res, next)=>{
    const menu ={
        menu: req.body.menu,
        price: req.body.price, 
        
     };
    res.status(200).json ({
    message: 'handling post request /menu',
    createdmenu: menu
   
}); 
    
});

router.get('/:menuid' , (req, res, next)=>{
    const id = req.params.menuid;
    if (id === 'special'){
        res.status(200).json({
            message: 'Here is your special menu',
            id: id,
        })
    }else{
        res.status(200).json({
            message: 'You passed the menu'
        })
    }
});

router.patch('/:menuid' , (req, res, next)=>{
    res.status(200).json({
        message: 'updated menu'
    });
});

router.delete('/:menuid' , (req, res, next)=>{
    res.status(200).json({
        message: 'deleted menu'
    });
})

router.put('/:menuid' , (req, res, next)=>{
    res.status(200).json({
        message: ' product updated',
        menuid:req.params.menuid,
    });
});





module.exports = router;