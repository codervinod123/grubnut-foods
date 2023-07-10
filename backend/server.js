const express=require("express");
const app=express();

const cors=require("cors")



const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/grubnutdata', {})
  .then(() => {
    console.log('Connected successfully to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });




app.get('/',(req,res)=>{
   res.send("Hello from server side");
})

app.listen(5000,(req,res)=>{
  console.log("server is running on port number 5000");
})