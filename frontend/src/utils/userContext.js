import React,{createContext} from 'react'

const UserContext = createContext({
  user: {
       name:"vinod",
       email:"mmmut@gmail.com"
      }
  
})

export default UserContext;



