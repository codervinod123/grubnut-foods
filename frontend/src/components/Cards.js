import React,{useEffect, useState} from 'react'
import Card from './Card';
import {itemsURL} from "../Config"
import Shimmer from "./Shimmer";








const filterRestaurant = (searchText, allRestaurants) => {
  const filteredData = allRestaurants.filter((restaurant) => {
    return (
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  return filteredData;
};



const Cards=()=>{

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
           setAllRestaurants(json.data.cards[2].data.data.cards);
           setFilteredRestaurant(json.data.cards[2].data.data.cards);
           console.log(json.data.cards[2].data.data.cards);
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
              </div>

              <div className='grid grid-cols-4 gap-6 '>
                
                  {
                    filteredRestaurant.map((item)=>{
                      return ( 
                        <div key={item.data.id}>
                          <Card item={item}/>
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