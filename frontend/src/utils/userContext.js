import { createContext } from "react";
import React from "react";

 const userContext=React.createContext({
  user:{
    name:"vinod",
    email:"vinodpr737947"
  }
})

export default userContext;
