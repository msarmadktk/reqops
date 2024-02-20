import React, { useState } from 'react'

import mainlogo from '../assets/mainlogo.svg'
import { TiThMenu } from "react-icons/ti";
import { GiCrossedBones } from "react-icons/gi";

const Menu = () => {
  return (
    <ul className='flex space-x-12 navbar:space-x-5'>
      <li><a href="">Home</a></li>
      <li><a href="">Service</a></li>
      <li><a href="">Feature</a></li>
      <li><a href="">Product</a></li>
      <li><a href="">Testimonial</a></li>
      <li><a href="">FAQ</a></li>
    </ul>
  )
}


const ResponsiveMenu = () =>{
  return (
    <ul className='flex flex-col bg-[#4CAF4F] top-0 right-0 fixed text-white sm:w-[60vw] w-[40vw] h-[30vh] justify-center items-start p-[4rem]'>
    <li><a href="">Home</a></li>
    <li><a href="">Service</a></li>
    <li><a href="">Feature</a></li>
    <li><a href="">Product</a></li>
    <li><a href="">Testimonial</a></li>
    <li><a href="">FAQ</a></li>
  </ul>
  )
  }
const Navbar = () => {

  const [toggle, setToggle] = useState(true)

  return (
    <div className='flex flex-row w-full justify-between mt-[1rem]'>

      <div className='flex flex-row gap-2 justify-center items-center'>
        <img src={mainlogo} alt="" />
        <h1 className='font-bold text-[28px]'>Nexcent</h1>
      </div>


      <div className='flex flex-row items-center w-[40%] nav:hidden'>
        <Menu />
      </div>



      <div className={`flex justify-center items-center xl:gap-6 sm:gap-0 menu:hidden `}>
        <h1 className='text-[#4CAF4F] font-[500] cursor-pointer'>Login</h1>
        <button type='button' className='bg-[#4CAF4F] text-white p-[6px] rounded-[6px] ml-4'>Sign Up</button>
      </div>



      <div className='flex justify-center items-center fixed right-0.5 top-[1.5rem]'>
        {
          toggle
            ? <><TiThMenu className='nav:block hidden z-50' size={27} onClick={() => setToggle(false)} /> </>
            : <><GiCrossedBones className='nav:block hidden z-50' size={27} onClick={() => setToggle(true)} /></>
        }

        {!toggle && (
          <div>
            <ResponsiveMenu />
          </div>
        )
        }
      </div>

    </div>
  )
}

export default Navbar