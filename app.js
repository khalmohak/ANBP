
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

//paths
const index = require('./routes/index');
const about_us = require('./routes/about_us');
const app_page = require('./routes/app_page');
const contact_us = require('./routes/contact_us');
const register = require('./routes/register');
const show_anbcs = require('./routes/show_anbcs');
//

app.use(bodyParser.urlencoded({extended:false}));

app.use(index);
app.use(about_us);
app.use(app_page);
app.use(contact_us);
app.use(show_anbcs);
app.use(register);




app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname, 'views','404.html'));
});


app.listen(3000);