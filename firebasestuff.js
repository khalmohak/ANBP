//firebase
const express = require('express');
const app = express();
var admin = require("firebase-admin");

var serviceAccount = require("./accountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://aatmanirbhar-pledge.firebaseio.com"
});

let db = admin.firestore();
let a = db.collection('register');

app.use('/successful_registration',(req,res)=>{
  console.log(req.body);
  let docRef = a.doc('bEmail')
  docRef.set({
    some:'fadf',
})



})



// document.getElementById('registerBtn').onclick =function(){
//   let docRef = a.doc('bEmail')
//   docRef.set({
//     nob:nob,
//     bEmail:bEmail,
//     GSTIN:GSTIN,
//     bAddress:bAddress,
//     bPhone:bPhone,
//     TOB:TOB,
//     bCity:bCity,
//     bState:bState,
//     bZIP:bZIP,
//   });
//   console.log(bEmail);

// };





// app.use('/data',(req,res)=>{
//   let docRef=a.doc('mohak')
//   docRef.set({
//   hobby: 'music',
//   age: 56,
//   });
//   res.send('done');
//   })





  // let nob, bEmail, GSTIN, bAddress, bPhone, TOB, bCity, bState, bZIP;

 
  //     nob=document.getElementById('inputBusinessName');
  //     bEmail=document.getElementById('inputEmail4');
  //     GSTIN=document.getElementById('inputGSTIN');
  //     bAddress=document.getElementById('inputAddress');
  //     bPhone=document.getElementById('inputPhone');
  //     TOB=document.getElementById('inputBusiness');
  //     bCity=document.getElementById('inputCity');
  //     bState=document.getElementById('inputState');
  //     bZIP=document.getElementById('inputZIP');

  
  
module.exports = app;