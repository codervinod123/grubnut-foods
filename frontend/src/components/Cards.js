import React,{useState} from 'react'
import Card from './Card';
import {itemsDetails} from "./Constants";



const filterRestaurant=(searchText,restaurants)=>{
  const filtereddata=itemsDetails.filter((restaurants)=>{
     return restaurants.restaurentName.includes(searchText);
  })
   return filtereddata;
}


const Cards=()=>{


    const [searchText,setSearchText]=useState("");
    const [restaurants,setRestaurants]=useState(itemsDetails);

   

    
    return(
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
                          const data=filterRestaurant(searchText,restaurants)
                          setRestaurants(data);
                   }}>
                     Search
                </button>
              </div>

              <div className='grid grid-cols-4 gap-6 '>
                 
                  {
                    restaurants.map((item,index)=>{
                      return( 
                        <>
                          <Card items={item} index={index} key={index}/>
                        </>
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