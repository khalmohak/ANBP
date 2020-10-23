
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const {nanoid} = require('nanoid');

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
let ID = nanoid();

app.post('/successful_registration',(req,res)=>{
    console.log(req.body);
    let docRef = a.doc(req.body.businessEmail)
    docRef.set({
      businessEmail:req.body.businessEmail,
      businessName:req.body.businessName,
      businessGSTIN:req.body.businessGSTIN,
      businessPhone:req.body.businessPhone,
      businessAddress:req.body.businessAddress,
      businessType:req.body.businessType,
      businessCity:req.body.businessCity,
      businessState:req.body.businessState,
      businessZIP:req.body.businessZIP,
      ownerFname: req.body.ownerFname,
    ownerMname: req.body.ownerMname,
    ownerLname: req.body.ownerLname,
    ownerPhone: req.body.ownerPhone,
    ownerEmail: req.body.ownerEmail,
    ownerAddress: req.body.ownerAddress,
    ownerCity: req.body.ownerCity,
    ownerState: req.body.ownerState,
    ownerZIP: req.body.ownerZIP,
    Product1name: req.body.Product1name,
    Product1price: req.body.Product1price,
    Product1description: req.body.Product1description,
    Product1photo: req.body.Product1photo,
    Product2name: req.body.Product2name,
    Product2price: req.body.Product2price,
    Product2description: req.body.Product2description,
    Product2photo: req.body.Product2photo,
    Product3name: req.body.Product3name,
    Product3price: req.body.Product3price,
    Product3description: req.body.Product3description,
    Product3photo: req.body.Product3photo,
    Product4name: req.body.Product4name,
    Product4price: req.body.Product4price,
    Product4description: req.body.Product4description,
    Product4photo: req.body.Product4photo,
    Product5name: req.body.Product5name,
    Product5price: req.body.Product5price,
    Product5description: req.body.Product5description,
    Product5photo: req.body.Product5photo,


  })
   
      res.send('done');
  });





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