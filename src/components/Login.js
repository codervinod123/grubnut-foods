import React from 'react'
import LOGO from "../asset/logologin.jpg";
import Loginbg from "../asset/loginbg.jpg";
import {BiLogoFacebook} from "react-icons/bi";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";


const Login = () => {
  return (
    <>
        <div className='bg-[#ffb905] w-full h-screen'>
            <div>
               <div className='pt-8'>
                 <h1 className='flex justify-center text-2xl font-semibold text-white'>Login Page</h1>
                 <h1 className='flex justify-center text-2xl font-semibold text-white'>Indians Food</h1>
               </div>
                <div className=''>
                  <div className='bg-[#ffb905]  px-[20%] pb-[40px] '>
                     <div className='border border-black drop-shadow-2xl'>
                         <header className='py-4 px-4'>
                            <div className='flex justify-between items-center'>
                                <div>
                                   <img className='w-[100px]' src={LOGO} alt="login_logo" />
                                </div>
                                <div>
                                   <ul className='flex gap-[20%] font-semibold text-white'>
                                     <li>Home</li>
                                     <li>About</li>
                                     <li>Contact</li>
                                     <li>Carrier</li>
                                   </ul>
                                </div>
                                <div>
                                   <ul className='flex gap-1'>
                                     <li><AiOutlineInstagram/></li>
                                     <li><BiLogoFacebook/></li>
                                     <li><AiOutlineTwitter/></li>
                                    </ul>
                                </div>
                            </div>
                         </header>

                         <div className='grid grid-cols-2'>
                            <div className='py-4'>
                            <form>
                            <div className='px-4 flex flex-col gap-6'>
                                    <div className='flex gap-4 '>
                                       <input className='w-[45%] px-2 py-1 rounded-sm bg-purple-300 placeholder:text-white' placeholder='Enter First Name' type="text" />
                                       <input className='w-[45%] px-2 py-1 rounded-sm bg-purple-300 placeholder:text-white' placeholder='Enter Last Name' type="text" />
                                    </div>
                                    <div className='flex gap-4 '>
                                       <input className='w-[45%] px-2 py-1 rounded-sm bg-purple-300 placeholder:text-white' placeholder='Enter e-mail' type="email" />
                                       <input className='w-[45%] px-2 py-1 rounded-sm bg-purple-300 placeholder:text-white' placeholder='Enter Phone' type="phone" />
                                    </div>

                                    <div className='flex gap-4'>
                                        <input className='w-[45%]  py-1 rounded-sm bg-purple-300 placeholder:text-white' placeholder='Enter Password' type="password" />
                                        <input className='w-[45%]  py-1 rounded-sm bg-purple-300 placeholder:text-white' placeholder='Conform Password' type="password" />
                                    </div>
                                    <div className='flex justify-center'>
                                    <button className='bg-gray-600 px-6 rounded-sm py-2'>SUBMIT</button>
                                    </div>
                                </div>
                            </form>
                            </div>
                            <div><img src={Loginbg} alt="loginimage" /></div>
                         </div>
                     </div>
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login;
