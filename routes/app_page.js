const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/app_page',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '..', 'views','app_page.html'));
     
 });


module.exports = router;