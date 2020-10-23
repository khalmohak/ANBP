const handeler = require('./routes.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const admin = require('./routes/admin');
const shop = require('./routes/shop');
const path = require('path');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',admin);
app.use(shop);
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname, 'views','404.html'));
});


app.listen(3000);