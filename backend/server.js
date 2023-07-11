const express=require("express");
const app=express();

require('dotenv').config();
require("./db/connection")




const PORT=process.env.PORT || 5000;



app.use(express.json());
app.use(require("./router/authentication"));

app.get('/',(req,res)=>{
   res.send("I am Running on server");
})



app.listen(PORT,()=>{
  console.log(`server is running on port number ${PORT}`);
})