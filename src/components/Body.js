import React,{useState} from 'react'
import GHFlag from "../asset/ghflag.svg";
import Category from "./images";
import Bodyshimmer from './Bodyshimmer';
import Footer from './Footer';


// import IMAGE1 from "../asset/itemimage/dokla.webp";


const Offers=()=>{
    return(
        <>
            <div className='flex justify-center gap-2 py-4 border-[1px] border-gray-300 rounded-lg shadow-md'>
                 <img src="" alt="gh_flag" height={"30px"}/>
                 <span className='text-[15px] font-semibold'>Unlock $0 Delivery fees</span>
            </div>
        </>
    )  
}


const Card=()=>{
  return(
    <>
                <div className='border-2 border-gray-300'>
                   <div>
                      <img src={IMAGE1} alt="doklaimage" />
                   </div> 
                   <h1 className='pt-2 px-3 font-semibold'>Corner Bakery</h1>
                   <div className='pt-2 flex gap-2 px-3'>
                       <img src={GHFlag} alt="gh_flag" height={"30px"}/>
                       <span className='text-[12px] text-gray-700'>American</span>
                   </div>

                   <div className='pt-2 pb-10 flex px-3 leading-6 justify-between'>
                      <div>
                          <p className='text-[12px] text-gray-900'>20-39 min</p>
                          <p className='text-[12px] text-gray-700'>$1.99 delivery</p>
                      </div>
                      <div>
                          <p>⭐⭐⭐⭐</p>
                          <p className='text-[14px] text-gray-700'>1184 ratings</p>
                      </div>
                   </div>

                </div>
    </>
  )
}


const Cards=()=>{

  const emptyArray=Array.from({length:100});
  return(
    <>
       <div className='px-14 py-6'>
          <div className="py-2">

            <div className='grid grid-cols-4 gap-6 '>

                {
                  emptyArray.map((index)=>{
                    return( 
                      <>
                        <Card key={index}/>
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





const Body = () => {

  const [shimmer,setShimmer] = useState(true);
  const handleClick=()=>{
     setShimmer(!shimmer);
  }
  
  
  if(shimmer){
  return (
    <div>
         <div className='px-14 py-4'>
            <Offers />
         </div>
         <Category/>
         <Cards/>
         <Footer/>
    </div>
  )
}
else{
  return (
    <>
        <div className='px-14 py-4'>
           <Offers/>
        </div>
       <Bodyshimmer/>
       <Footer/>
    </>
   )
}


}

export default Body;




