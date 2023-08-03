import React, {useState,useEffect } from 'react'
import {useParams} from "react-router-dom"
import {restaurantDetailsURL} from "../Config";

import Shimmer from './Shimmer';
import MenuShimmer from './MenuShimmer';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';


const filterData=(searchText,restaurantDishes)=>{
   const restaurantName=restaurantDishes;
   console.log(restaurantName);
}


const RestaurantDetails = () => {
  const {id} =useParams();

  const [searchText,setSearchText]=useState("");
  console.log(searchText);
  const [restaurantDishes,setRestaurantDishes]=useState([]);

  
  useEffect(()=>{
     getRestaurantDetails();
  },[]);

  const dispatch=useDispatch();
  const handleAddItem=(items)=>{
    dispatch(addItem(items));
  }

  const getRestaurantDetails=async()=>{
     try {
      const data=await fetch(restaurantDetailsURL+id);
      const json=await data.json();
      const originalArray=json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
      const NewRestaurantDeatils=originalArray.slice(1);
      console.log(NewRestaurantDeatils);
      setRestaurantDishes(NewRestaurantDeatils);
     } catch (error) {
         console.log("Api can not be called"+error);
     }
  }


  return restaurantDishes.length<=0?<MenuShimmer/>:(
    <>
    <div className='px-16'>
        <div >
            
          <div className='px-16'>
            <div className='flex justify-between px-16'>
               <span className='text-[10px] text-gray-500'>Home / Gorakhpur / Restaurant Name </span>
               <input onKeyUp={()=>filterData(searchText,filterArr)} onChange={(e)=>{setSearchText(e.target.value)}} className='border border-gray-400 rounded-full px-8 py-2 focus:outline-none' type="text" placeholder='search For dish'/>
            </div>

            <div className='border-b border-dashed flex justify-between px-16 py-8'>

                <div>
                   <p className='text-lg font-bold'>Leon's - Burgers & Wings (Leon Grill)</p>
                   <p className='text-sm text-gray-500'>American Snaxks</p>
                   <p className='text-sm text-gray-500'>Area and Distance</p>
                </div>
                <div className='border-[1px] border-green-500 rounded'>
                   <div className="bg-gray-200 px-2 py-[1px] flex items-center gap-[1px]"><span className='text-green-400'>☆</span><span className='flex text-sm text-gray-500' >4.4</span></div>
                   <p className='text-sm font-bold border-t-2 border-black flex justify-center items-center'>10K Ratings</p>
                </div>

            </div>
         </div>
           
            


{restaurantDishes.map((item, index) => {
 
        
      

        return (
          <div key={index}>
              <div key={index}>
                  {
                    item?.card?.card?.itemCards &&  item?.card?.card?.itemCards.map((items,index)=>{
                    return(

                     items.card.info.imageId &&
                       <div key={index} className=' px-32 '>

                        <div className='flex border-b-2 border-gray-300 py-8 gap-32'>
                            <div className='w-[60%]'>
                               <div>
                                 <h1 className='text-lg font-bold text-gray-700'>{items.card.info.name}</h1>
                                 <p>{`₹ ${items.card.info.price/100}`}</p>
                               </div>

                               <div className='py-3'>
                                 <p className='text-sm text-gray-500'>{items.card.info.description}</p>
                               </div>
                               
                            </div>
                            <div>
                                <img className='rounded-lg absolute border-2 border-gray-400' width={180} src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${items.card.info.imageId}`} alt="" />
                                <button onClick={()=>handleAddItem(items)}  className='px-4 relative top-[-15] py-1 border border-gray-400 rounded text-green-500 font-bold bg-gray-100'>ADD</button>
                            </div>
                        </div>
                         
                       </div>
                    )
                    })
                  }
              </div>
          </div>
        );
      })}


        </div>
      </div>  
    </>
  )
}

export default RestaurantDetails;

