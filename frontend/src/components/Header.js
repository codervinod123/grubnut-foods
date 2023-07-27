import React,{useState,useEffect,useContext} from 'react'
import "./global.css"

import Logo from "../asset/GH_logo_svg.svg";
import { BiTimeFive } from "react-icons/bi";

import { BsFillBagPlusFill } from "react-icons/bs";
import { GrFormSearch } from "react-icons/gr";

import useOnline from "../utils/useIsOnline"
import userContext from '../utils/userContext';

// const {user}=useContext(userContext());


const Title=()=>{
    return(
        <>
           <div className="flex text-sm text-white px-12">
               {/* <MdOutlineFoodBank className="text-orange-500"/> */}
               <img width={96} src={Logo} alt="logo" />
           </div>
        </>
    )
}

const Header=()=>{

   
    const isOnline =useOnline(); 

    const [buttonBG, setButtonBG] = useState(false);
    const handleClick=()=>{
        setButtonBG(!buttonBG);
        console.log(buttonBG);
    }

    const [showCart,setShowCart]=useState(false);

    const handleCartClick=()=>{
        setShowCart(!showCart);
        console.log(showCart);          
    }


    
    
    // useEffect(()=>{

    //     const handleOnline=()=>{
    //         setIsOnline(true);
    //     }

    //     const handleOffline=()=>{
    //         setIsOnline(false);
    //     }

    //     window.addEventListener('online',handleOnline)
    
    //     window.addEventListener('offline',handleOffline)
    
    //     return()=>{
    //        window.removeEventListener('online',handleOnline);
    //        window.removeEventListener('offline',handleOffline);
    //     } 
        
    // },[])
   

    return(
        <>
      <div className="px-4 py-5 flex  bg-white items-center shadow-lg box-border">
        <Title/>
        <div className="grid grid-cols-2 w-full">
            <div  className="flex gap-3">
                 <div className="border flex  gap-5 border-gray-600 rounded-full px-[1px] py-[0px] items-center">
                     <button onClick={handleClick} className={`text-xs rounded-full font-bold px-2  h-[25px] transition-all duration-300  ${buttonBG?'bg-gray-500 text-white':'bg-white text-gray-600'} `}>Delivery</button>
                     <button onClick={handleClick} className={`text-xs rounded-full font-bold px-2  h-[25px] transition-all duration-300  ${buttonBG?'bg-white text-gray-600':'bg-gray-500 text-white'} `}>Pickup</button>
                 </div>
                 <div className='flex items-center justify-center'>
                     <button className='border  gap-5 border-gray-400 rounded-full p-[3px] px-2 flex items-center justify-center text-sm font-bold text-gray-600'><span><BiTimeFive size={"24px"}/></span>Gorakhpur</button>
                </div>
                 <div className='flex items-center justify-center'>
                     <button className='border  gap-5 border-gray-400 rounded-full p-[3px] px-2 flex items-center justify-center text-sm font-bold text-gray-600'><span><BiTimeFive size={"24px"}/></span>Now</button>
                 </div>
            </div>

            <div className="flex justify-between px-4 items-center">
                 <div>
                     <div className='searchbar border-2 border-gry-400 rounded-full flex px-6 py-1 items-center gap-2 focus-within:border-2 focus-within:border-purple-400'>
                        <span className='text-gray-400'><GrFormSearch size={"25px"}/></span>
                        <input className="focus outline-none" type="text" placeholder='Search for food, drinks'/> 
                     </div> 
                 </div>
                 <div>
                     <button className='text-sm text-gray-400'>Catering</button>
                     <button className='text-sm text-gray-400'>{isOnline?"online":"offline"}</button>
                 </div>
                 {/* <div className='cursor-pointer'>
                  <Link to="/register"><SiTheregister size={"20px"}/></Link>
                 </div>
                 <div className='cursor-pointer'>
                    <Link to="/login"><FaUserAlt size={"20px"}/></Link>
                 </div> */}
                 <div className='cursor-pointer flex flex-col items-center'>
                     <BsFillBagPlusFill size={"20px"} onClick={handleCartClick}/>
                 </div>
                    
            </div>
        </div>
        {
                        showCart&&
                        <div className='border-[2px] border-gray-300 rounded-md p-4 w-[400px]'>
                            <div className='flex flex-col justify-center'>
                                <div className='flex justify-center'>
                                   <div>
                                     <img width={"110px"} src="https://assets.grubhub.com/assets/img/grubhub/empty-bag.svg" alt="" />
                                   </div>
                                </div>
                                <div>
                                    <p className='text-gray-400 text-2xl font-bold flex justify-center py-4'>Your bag is Empty</p>
                                </div>
                            </div>
                        </div>
                     }
      </div>
      </>
    )
  }

export default Header;


