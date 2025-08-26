const express = require('express')
const router = express.Router();
const{readData , writeData} = require('../utils/file.js')

router.get('/home',(req,res)=>{
    res.render('home')
})
                                     
//api endpoint for exposing the resource
router.get('/api/v1/users',async (req,res)=>{
    try{
       const data = await readData();
       res.status(200).send(data);                                 
    }
    catch(error){                                    
      res.status(500).send(`Internal Server error :${error.message}`)
    }});

module.exports=router;
