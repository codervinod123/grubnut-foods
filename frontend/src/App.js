import React from "react"
import LandingPage from "./components/LandingPage";

import { BrowserRouter,Routes,Route } from "react-router-dom";

import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Login from "./components/Login"
import Register from "./components/Register";








const Applayout=()=>{
  return(
     <>
     <BrowserRouter>
        <Routes>
           <Route path="/" element={<LandingPage/>}/>
           <Route path="/body" element={<Body/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
     </>

  )
}




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)
