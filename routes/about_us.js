const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/about_us',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '..', 'views','about_us.html'));
     
 });


module.exports = router;