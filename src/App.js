import React from "react"
import LandingPage from "./components/LandingPage";

import { BrowserRouter,Routes,Route } from "react-router-dom";

import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Login from "./components/Login"







const Applayout=()=>{
  return(
     <>
     <BrowserRouter>
        <Routes>
           <Route path="/" element={<LandingPage/>}/>
           <Route path="/body" element={<Body/>}/>
           <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
     </>

  )
}




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)
