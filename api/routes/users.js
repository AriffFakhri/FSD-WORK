const express = require('express');
const router = express.Router(); 

router.post('/' , (req, res, next)=>{
    const user ={
        name: req.body.name,
        age: req.body.age, 
        
     };
    res.status(200).json ({
    message: 'handling post request /user',
    createduser: user
   
}); 
    
});

router.get('/:userid' , (req, res, next)=>{
    const id = req.params.userid;
    if (id === 'special'){
        res.status(200).json({
            message: 'Here is your special id',
            id: id,
        })
    }else{
        res.status(200).json({
            message: 'You passed the id',
        })
    }
});

router.patch('/:userid' , (req, res, next)=>{
    res.status(200).json({
        message: 'updated user',
    });
});

router.delete('/:userid' , (req, res, next)=>{
    res.status(200).json({
        message: 'deleted user',
    });
})

router.put('/:userid' , (req, res, next)=>{
    res.status(200).json({
        message: ' user updated ',
        userid:req.params.userid,
    });
});





module.exports = router;