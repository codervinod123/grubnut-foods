import React,{useState} from 'react'
import GHFlag from "../asset/ghflag.svg";
import Category from "./Category";
import Bodyshimmer from './Shimmer';
import Footer from './Footer';
import Header from "./Header";

import Offers from './Offers';

import {Outlet} from "react-router-dom"



import {AiTwotoneHeart} from "react-icons/ai"

import Cards from './Cards';



const Body = () => {

  const [shimmer,setShimmer] = useState(true);
 
  return (
    <div>
        <Header/>
         <div className='px-14 py-4'>
            <Offers />
         </div>
         <Category/>
         <Outlet/>
    </div>
  )
}


export default Body;




