import React from 'react'
import {useParams} from "react-router-dom"

const RestaurantDetails = () => {
  const {id} =useParams();
  console.log(`id is ${id}`)
  return (
    <div>
        <h1>The restaurant id is:  {id}</h1>
    </div>
  )
}

export default RestaurantDetails;

