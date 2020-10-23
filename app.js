
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


//template engine
app.set('view engine','ejs');
app.set('views','views');


//paths
const index = require('./routes/index');
const about_us = require('./routes/about_us');
const app_page = require('./routes/app_page');
const contact_us = require('./routes/contact_us');
const register = require('./routes/register');
const show_anbcs = require('./routes/show_anbcs');
//const successful_registration = require('./routes/successful_registration');
//
app.use(bodyParser.urlencoded({extended:true}));
//const fb = require('./firebasestuff');

var admin = require("firebase-admin");

var serviceAccount = require("./accountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://aatmanirbhar-pledge.firebaseio.com"
});

let db = admin.firestore();
let a = db.collection('register');






app.use(index);
app.use(about_us);
app.use(app_page);
app.use(contact_us);
app.use(show_anbcs);
app.use(register);
app.post('/successful_registration',(req,res)=>{
    console.log(req.body);
    let docRef = a.doc(req.body.businessEmail)
    docRef.set({
      some:'fadf',
  })
   
      res.send('done');
  });





app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname, 'views','404.html'));
});









app.listen(3000);