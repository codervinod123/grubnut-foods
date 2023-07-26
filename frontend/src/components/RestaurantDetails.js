import React, {useState,useEffect } from 'react'
import {useParams} from "react-router-dom"
import {restaurantDetailsURL} from "../Config";

const RestaurantDetails = () => {
  const {id} =useParams();
  const [restaurantDishes,setRestaurantDishes]=useState([]);
  
  useEffect(()=>{
     getRestaurantDetails();
  },[]);


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


  return (
    <>
    <div className='px-16'>
        <div >
            <div className='flex justify-between'>
               <p>Home / Gorakhpur / Restaurant Name </p>
               <input className='border border-red-400' type="text" placeholder='search For dish'/>
            </div>

            <div className='border-b border-dashed flex justify-between'>

                <div>
                   <p>Restaurant Name</p>
                   <p>Location</p>
                   <p>Area and Distance</p>
                </div>
                <div className='border-[1px] border-green-500 rounded'>
                   <p>4.4</p>
                   <p>10K Ratings</p>
                </div>

            </div>
           
            


{restaurantDishes.map((item, index) => {
        return (
          <div key={index}>
              <div key={index}>
                  {
                    item?.card?.card?.itemCards &&  item?.card?.card?.itemCards.map((items,index)=>{
                    return(
                       <div  key={index}>

                        <div className='flex justify-center'>
                            <div>
                               <h1>{items.card.info.name}</h1>
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

