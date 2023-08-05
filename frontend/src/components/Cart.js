import React,{useState} from 'react'
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { clearCart } from '../utils/cartSlice'
import { removeItem } from '../utils/cartSlice'

const Cart = () => {

    const dataOfCart=useSelector(store=>store.cart.items);
    
    const [cartItems,setCartItems]=useState(dataOfCart);

    const dispatch=useDispatch();
    const handleClearCart=()=>{

      console.log("cleared the whole cart");
       dispatch(clearCart());
    }

    const handleRemoveItem=(id)=>{
       console.log(`remove one by one ${id}`);
       dispatch(removeItem(id));
      //  console.log(cartItems);
    }


  return (
    <div>
      <button onClick={()=>handleClearCart()} className='px-2 bg-purple-600  py-1 rounded'>Click me</button>
        {
       dataOfCart.map((items,index)=>{
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
                                <button onClick={()=>handleRemoveItem(items.card.info.id)} className='px-4 relative top-[-15] py-1 border border-gray-400 rounded text-green-500 font-bold bg-gray-100'>Remove</button>
                            </div>
                        </div>
                         
                       </div>
                    )
                    })
                }    
    </div>
  )
}

export default Cart
