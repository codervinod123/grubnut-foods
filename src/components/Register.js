import React from 'react'
import LOGO from "../asset/logo.svg";
import Login_bg from "../asset/login_bg.jpg";
import {BiLogoFacebook} from "react-icons/bi";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {Link} from "react-router-dom"

const Register = () => {


  const handleFormSubmit=()=>{
     
      console.log("form has submitted");
  }

  return (
    <>
        <div className='bg-image w-full h-screen'>
            <div>
              
                <div className=''>
                  <div className='px-[20%] pb-[40px]'>
                     <div className='drop-shadow-2xl'>
                         <header className='py-4 px-4'>
                            <div className='flex gap-[30%]  items-center'>
                                <div>
                                <Link to="/"> <img className='w-[100px]' src={LOGO} alt="login_logo" /></Link>
                                </div>
                                <div>
                                   <ul className='flex gap-[20%] font-semibold text-white'>
                                     <li>Home</li>
                                     <li>About</li>
                                     <li>Contact</li>
                                     <li>Carrier</li>
                                   </ul>
                                </div>
                                {/* <div>
                                   <ul className='flex gap-1'>
                                       <li><AiOutlineInstagram/></li>
                                       <li><BiLogoFacebook/></li>
                                       <li><AiOutlineTwitter/></li>
                                    </ul>
                                </div> */}
                            </div>
                         </header>

                         <div className='flex flex-col'>
                            <div className='py-4'>
                            <form className='flex justify-center items-center'>
                            <div className='px-4 flex flex-col border rounded gap-6 py-[100px] bg-gray-600'>
                                    <div className='flex gap-4 '>
                                       <input className=' px-2 py-1 rounded-sm  placeholder:text-white border border-white bg-transparent focus:outline-none text-white' placeholder='Enter First Name' type="text" />
                                       <input className=' px-2 py-1 rounded-sm  placeholder:text-white border border-white bg-transparent  focus:outline-none text-white' placeholder='Enter Last Name' type="text" />
                                    </div>
                                    <div className='flex gap-4 '>
                                       <input className='px-2 py-1 rounded-sm  placeholder:text-white border border-white bg-transparent focus:outline-none text-white' placeholder='Enter e-mail' type="email" />
                                       <input className='px-2 py-1 rounded-sm  placeholder:text-white border border-white bg-transparent focus:outline-none text-white' placeholder='Enter Phone' type="phone" />
                                    </div>

                                    <div className='flex gap-4 '>
                                       <input className='px-2 py-1 rounded-sm  placeholder:text-white border border-white bg-transparent focus:outline-none text-white' placeholder='Enter password' type="email" />
                                       <input className='px-2 py-1 rounded-sm  placeholder:text-white border border-white bg-transparent focus:outline-none text-white' placeholder='Conform password' type="phone" />
                                    </div>
                                    <div className='flex justify-center'>
                                       <button type='submit' onClick={handleFormSubmit} className='bg-white font-bold text-gray-500 px-6 rounded-sm py-2 hover:bg-gray-400'>SUBMIT</button>
                                    </div>
                                </div>
                            </form>
                            </div>
                         </div>
                     </div>
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register;
