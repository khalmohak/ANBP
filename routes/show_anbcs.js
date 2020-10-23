const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/show_anbcs',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '..', 'views','show_anbcs.html'));
     
 });


module.exports = router;