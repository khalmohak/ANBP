const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/register',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '..', 'views','register.html'));
     
 });


module.exports = router;