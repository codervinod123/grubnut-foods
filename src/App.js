import React from "react"
import LandingPage from "./components/LandingPage";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Login from "./components/Login"







const Applayout=()=>{
  return(
     <>
      <Header/>
      <Body/>
     </>

  )
}




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)
