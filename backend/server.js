const express=require("express");
const app=express();


require("./db/connection")




app.use(express.json());
app.get('/',(req,res)=>{

  res.send("Hello from server side");
})

const PORT=4000;

app.listen(PORT,()=>{
  console.log(`server is running on port number ${PORT}`);
})