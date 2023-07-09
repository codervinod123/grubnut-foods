import React,{useState} from 'react'
import GHFlag from "../asset/ghflag.svg";
import Category from "./images";
import Bodyshimmer from './Bodyshimmer';
import Footer from './Footer';
import Header from "./Header";
import Offers from './Offers';
import IMAGE1 from "../asset/itemimage/dokla.webp";
import IMAGE2 from "../asset/itemimage/cake.webp";
import Card from './Card';


import {AiTwotoneHeart} from "react-icons/ai"



const itemsDetails = [
    {
        id: 1,
        image: IMAGE1,
        restaurentName: "Corner Bakery",
        Country: "indian",
        deliveryTime: "20-25",
        price: 12,
        ratings: 1192
    },
    {
        id: 2,
        image: IMAGE2,
        restaurentName: "Corner Bakery",
        Country: "Chinees",
        deliveryTime: "20-30",
        price: 15,
        ratings: 1112
    },
    {
        id: 3,
        image: IMAGE1,
        restaurentName: "Corner Bakery",
        Country: "American",
        deliveryTime: "20-30",
        price: 19,
        ratings: 3232
    },
    {
        id: 4,
        image: IMAGE1,
        restaurentName: "Corner Bakery",
        Country: "Italian",
        deliveryTime: "20-30",
        price: 22,
        ratings: 4392
    }
]


const Cards=()=>{

    // const emptyArray=Array.from({length:100});
    return(
      <>
         <div className='px-14 py-6'>
            <div className="py-2">
  
              <div className='grid grid-cols-4 gap-6 '>
  
                  {
                    itemsDetails.map((item,index)=>{
                      return( 
                        <>
                          <Card key={index} items={item}/>
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