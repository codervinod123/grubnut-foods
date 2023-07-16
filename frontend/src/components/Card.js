import React,{useState} from 'react'
import GHFlag from "../asset/ghflag.svg";

import {AiTwotoneHeart} from "react-icons/ai"




const Card=({item})=>{


    const [addToCart,setAddToCart]=useState(false);
  
     const handleAddToCart=()=>{
         setAddToCart(!addToCart);
     }

   
  
  
    return(
      <>
        
          <div className='border-2 border-gray-300 rounded hover:scale-105 transform transition-all duration-300'>
                    <div className='absolute'>
                        <div className="relative bg-gray-500 p-1 flex  justify-end rounded-full top-[4px] left-[4px] cursor-pointer">
                          <AiTwotoneHeart onClick={handleAddToCart} className={`text-[25px] ${addToCart?"text-red-500":'text-white'}`}/>
                        </div>
                    </div>

                    <div>
                    <div>
                        <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item.data.cloudinaryImageId}`} alt="image" />
                     </div> 
                     <h1 className='pt-2 px-3 font-semibold'>{item.data.name}</h1>
                     <div className='pt-2 flex gap-2 px-3 items-start'>
                         <img src={GHFlag} alt="gh_flag" height={"30px"}/>
                         <span className='text-[12px] text-gray-700'>{item.data.cuisines.join(", ")}</span>
                     </div>
  
                     <div className='pt-2 pb-10 flex px-3 leading-6 justify-between'>
                        <div className='flex'>
                            <span>.</span>
                            <p className='flex bg-green-400 px-2'>{item.data.avgRating}</p>
                        </div>

                        <div>
                            <span>.</span>
                            <p className='flex'>{item.data.deliveryTime}</p>
                        </div>

                        <div>
                            <span>.</span>
                            <p className='fle'>{item.data.costForTwoString}</p>
                        </div>
                     </div>
                    </div>
                    
  
                  </div>
         
      </>
    )
  }

  export default Card;