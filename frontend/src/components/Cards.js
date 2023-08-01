import React,{useContext, useEffect, useState} from 'react'
import Card from './Card';
import {itemsURL} from "../Config"
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import {filterRestaurant} from "../utils/Filterdata"
import UserContext from '../utils/userContext';







const Cards=()=>{
   
    const {user,setUser}=useContext(UserContext);
    
    console.log("initially rendered");
    const [searchText,setSearchText]=useState("");
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);

     useEffect(()=>{
          getrestaurant();
          console.log("useEffect runing")
     },[]);
   
   const getrestaurant=async()=>{
      try {
           const data=await fetch(itemsURL);
           const json=await data.json();
           setAllRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
           setFilteredRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
            console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      } catch (error) {
           console.log("Api can't be calles"+error);
      }
   }


    return allRestaurants.length==0?(<Shimmer/>):(
      <>
         <div className='px-14 py-6'>
            <div className="py-2">
               
              <div className='py-4'>
                 <input 
                    className='border-2 border-gray-400' 
                    type='text' 
                    placeholder="search"
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                />
                <button 
                   className='border-2 border-gray-400 mx-4' 
                   onClick={(e)=>{
                          const data=filterRestaurant(searchText,allRestaurants);
                          setFilteredRestaurant(data);
                   }}>
                     Search
                </button>

                <input 
                    className='border-2 border-gray-400' 
                    type='text' 
                    placeholder="search"
                    value={user.email}
                    onChange={(e)=>{
                        setUser({email:e.target.value});
                    }}
                />

             


              </div>

              <div className='grid grid-cols-4 gap-6 '>
                
                  {
                    filteredRestaurant.map((item)=>{
                      return ( 
                       
                            <div key={item.info.id}>
                              <Link to={`restaurantdetails/${item.info.id}`}><Card item={item}/> </Link>
                            </div>
                    
                      )
                    })
                  }
             </div>
               
            </div>
         </div>
         
      </>
    )
  }
  

  export default Cards;