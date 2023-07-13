const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../model/userschema")



router.post('/register', async (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    res.status(400).json({ error: "convention is not right" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ Message: "Already Registerd please login", });
    }

    const hashedPass = await bcrypt.hash(password, 10);
    const user = new User({ name, email, phone, password: hashedPass });
    user.save();
    delete user.password;
   


    res.status(200).json({ message: "Successfully DONE",user });

  } catch (error) {
    console.log(`galti hai kahi na kahi bhai ${error}`);
  }
})








router.post("/login",async(req,res)=>{
  
     const {email,password}=req.body;
     if(!email || !password) 
        return res.status(400).json({Message:"Please fill email and pass both"});
     
 try {
      
        const isExist=await User.findOne({email:email});
        
        if(isExist)
        {
          const user=await User.findOne({email:email});
         
          const isMatched=await bcrypt.compare(password,isExist.password);
          if(isMatched)
          {
             return res.status(200).json({Message:"Login Successfully",user});
          }
          else
             return res.status(400).json({Message:"Can't login please login with valid pass"});  
        }
        return res.status(400).json({Message:"Can't login please login with valid email"});

    } catch (error) {
        return res.status(400).json({Message:"Can't login please login with valid credentil"});
    }
})





module.exports = router;
