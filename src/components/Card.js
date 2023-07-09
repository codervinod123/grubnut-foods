import React,{useState} from 'react'
import GHFlag from "../asset/ghflag.svg";
import Category from "./images";
import Bodyshimmer from './Bodyshimmer';
import Footer from './Footer';
import Header from "./Header";
import Offers from './Offers';
import Cake from "../asset/itemimage/cake.webp"
import IMAGE1 from "../asset/itemimage/dokla.webp";
import {AiTwotoneHeart} from "react-icons/ai"




const Card=({items})=>{

   

    const [addToCart,setAddToCart]=useState(false);
  
     const handleAddToCart=()=>{
         setAddToCart(!addToCart);
     }
  
  
  
    return(
      <>
                  <div className='border-2 border-gray-300 rounded'>
                    <div className='absolute'>
                        <div className="relative bg-gray-500 p-1 flex  justify-end rounded-full top-[4px] left-[4px] cursor-pointer">
                          <AiTwotoneHeart onClick={handleAddToCart} className={`text-[25px] ${addToCart?"text-red-500":'text-white'}`}/>
                        </div>
                    </div>

                    <div>
                    <div>
                        <img src={items.image} alt="doklaimage" />
                     </div> 
                     <h1 className='pt-2 px-3 font-semibold'>{items.restaurentName}</h1>
                     <div className='pt-2 flex gap-2 px-3'>
                         <img src={GHFlag} alt="gh_flag" height={"30px"}/>
                         <span className='text-[12px] text-gray-700'>{items.Country}</span>
                     </div>
  
                     <div className='pt-2 pb-10 flex px-3 leading-6 justify-between'>
                        <div>
                            <p className='text-[12px] text-gray-900'>{items.ratings} min</p>
                            <p className='text-[12px] text-gray-700'>${items.price} delivery</p>
                        </div>
                        <div>
                            <p>⭐⭐⭐⭐</p>
                            <p className='text-[14px] text-gray-700'>{items.ratings} ratings</p>
                        </div>
                     </div>
                    </div>
                    
  
                  </div>
      </>
    )
  }

  export default Card;