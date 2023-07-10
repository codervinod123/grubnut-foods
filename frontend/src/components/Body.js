import React,{useState} from 'react'
import GHFlag from "../asset/ghflag.svg";
import Category from "./images";
import Bodyshimmer from './Bodyshimmer';
import Footer from './Footer';
import Header from "./Header";
import Offers from './Offers';
import IMAGE1 from "../asset/itemimage/dokla.webp";


import {AiTwotoneHeart} from "react-icons/ai"

import Cards from './Cards';










const Body = () => {

  const [shimmer,setShimmer] = useState(true);
  const handleClick=()=>{
     setShimmer(!shimmer);
  }
  
  

  
  if(shimmer){
  return (
    <div>
        <Header/>
         <div className='px-14 py-4'>
            <Offers />
         </div>
         <Category/>
         <Cards/>
         <Footer/>
    </div>
  )
}
else{
  return (
    <>
        <Header/>
        <div className='px-14 py-4'>
           <Offers/>
        </div>
       <Bodyshimmer/>
       <Footer/>
    </>
   )
}


}

export default Body;




