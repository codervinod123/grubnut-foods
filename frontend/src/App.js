import React from "react"
import ReactDOM  from "react-dom/client";

import LandingPage from "./components/LandingPage";
import Body from "./components/Body";
import Footer from "./components/Footer";
import RestaurantDetails from "./components/RestaurantDetails";
import PagenotFound from "./components/PagenotFound";

import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";







const Applayout=()=>{
  return(
     <>
        <Outlet/>
        <Footer/>
     </>

  )
}




const appRouter=createBrowserRouter([
   {
      path:"/",
      element:<Applayout />,
      errorElement:<PagenotFound/>,
      children:[
         {
            path:"/",
            element:<LandingPage/>
         },
         {
            path:"/body/",
            element:<Body/> 
         },
         {
            path:"/restaurantdetails/:id",
            element:<RestaurantDetails/>
         }
        
      ]
   }
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
