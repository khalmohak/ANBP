const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/contact_us',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '..', 'views','contact_us.html'));
     
 });


module.exports = router;