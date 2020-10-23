const express = require('express');
const router = express.Router();
const path = require('path');
router.post('/successful_registration',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '..', 'views','successful_registration.html'));
   
     
 });


module.exports = router;