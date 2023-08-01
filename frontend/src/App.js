import React, { lazy,Suspense,useState,Provider } from "react"
import ReactDOM  from "react-dom/client";

import LandingPage from "./components/LandingPage";
import Body from "./components/Body";
import Footer from "./components/Footer";
import RestaurantDetails from "./components/RestaurantDetails";
import PagenotFound from "./components/PagenotFound";

import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Cards from "./components/Cards";
import Login from "./components/Login";
import Register from "./components/Register";
import UserContext from "./utils/userContext";

// import Instamart from "./components/Instamart";
const Instamart=lazy(() => import("./components/Instamart"));








const Applayout=()=>{
 
   const [user,setUser]=useState({
      name:"manoj",
      email:"pmp@gmail.com"
   })

  return(
     <>

        <UserContext.Provider value={{user:user,setUser:setUser}}>
           <Outlet/>
           <Footer/>
        </UserContext.Provider>
      
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
            element:<LandingPage/>,
         },
         {
            path:"/body/",
            element:<Body/> ,
            children:[
                {
                  path:"",
                  element:<Cards/>
                },

                {
                   path:"restaurantdetails/:id",
                  element:<RestaurantDetails/>
                 },

                 {
                   path:"instamart",
                   element:<Suspense><Instamart/></Suspense>
                 }
            ]
         },
         {
            path:"login",
            element:<Login/>
         },
         
         {
            path:"register",
            element:<Register/>
         }
        
      ]
   }
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
