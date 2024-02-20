import React from 'react'
import mainlogo from '../assets/mainlogo.svg'
import { SiInstagram } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";

const footer = () => {
  return (
    <div className='flex flex-col mt-[6rem] bg-[#F5F7FA] justify-center items-center'>
      <h1 className='text-[64px] leading-[76px] sm:text-[40px] sm:leading-[58px] text-center font-semibold'>Pellentesque suscipit <br className='hidden xl:block ' /> fringilla libero eu.</h1>
      <button type='button' className='bg-[#4CAF4F] px-6 py-2 mt-[2rem] rounded-[5px] text-white'>Get a Demo &rarr;</button>

      <div className='flex flex-row sm:flex-col-reverse gap-8 flex-wrap justify-around sm:justify-center items-center bg-[#263238] w-full px-[4rem] mt-8 py-[2rem]'>

        <div className='flex flex-col'>

          <div className='flex justify-start items-center px-8 mb-4'>
            <img src={mainlogo} alt="" />
            <h1 className='font-semibold text-[34px] text-white'>Nexcent</h1>
          </div>

          <div className='flex flex-col justify-start items-start px-8 mt-4'>
            <p className='text-white text-[14px]'>Copyright © 2020 Nexcent ltd.</p>
            <p className='text-white text-[14px]'>All right reserved</p>
            <p className='text-white text-[14px] mt-2'>Made by <span className='font-bold'>Databot</span> with ❤️‍🔥</p>
          </div>

          <div className='flex justify-evenly mt-4 items-center'>
            <a href='https://www.instagram.com/' target='_blank'> <SiInstagram size={21} className='text-white cursor-pointer transition-[10s] hover:scale-[1.5] ' /></a>
            <a href='https://github.com/' target='_blank'> <TbWorld size={21} className='text-white cursor-pointer transition-[10s] hover:scale-[1.5]' /></a>
            <a href='https://twitter.com/' target='_blank'> <BsTwitterX size={21} className='text-white cursor-pointer transition-[10s] hover:scale-[1.5]' /></a>
            <a href='https://youtube.com/' target='_blank'> <ImYoutube size={21} className='text-white cursor-pointer transition-[10s] hover:scale-[1.5]' /></a>
          </div>
        </div>

        <div className='flex flex-col justify-center items-start'>
          <h1 className='text-[20px] font-semibold text-white mb-4'>Company</h1>
          <p className='text-[#F5F7FA] text-[14px] hover:border-b-2 hover:border-white mb-2  cursor-pointer'>About Us</p>
          <p className='text-[#F5F7FA] text-[14px] hover:border-b-2 hover:border-white mb-2 cursor-pointer'>Blog</p>
          <p className='text-[#F5F7FA] text-[14px] hover:border-b-2 hover:border-white mb-2 cursor-pointer'>Contact Us</p>
          <p className='text-[#F5F7FA] text-[14px] hover:border-b-2 hover:border-white mb-2 cursor-pointer'>Pricing</p>
          <p className='text-[#F5F7FA] text-[14px] hover:border-b-2 hover:border-white mb-2 cursor-pointer'>Testimonials</p>
        </div>

        <div className='flex flex-col justify-center items-start'>
          <h1 className='text-[20px] font-semibold text-white mb-4'>Support</h1>
          <p className='text-[#F5F7FA] text-[14px] hover:border-b-2 hover:border-white mb-2  cursor-pointer'>Help Center</p>
          <p className='text-[#F5F7FA] text-[14px] hover:border-b-2 hover:border-white mb-2 cursor-pointer'>Terms of service</p>
          <p className='text-[#F5F7FA] text-[14px] hover:border-b-2 hover:border-white mb-2 cursor-pointer'>Legal</p>
          <p className='text-[#F5F7FA] text-[14px] hover:border-b-2 hover:border-white mb-2 cursor-pointer'>Privacy policy</p>
          <p className='text-[#F5F7FA] text-[14px] hover:border-b-2 hover:border-white mb-2 cursor-pointer'>Status</p>
        </div>

        <div className='flex flex-col justify-center items-start'>
          <h1 className='text-[20px] font-semibold text-white mb-4'>Stay up to date</h1>
          <input type="email" placeholder='Your email address' className='w-[255px] h-[40px] bg-[#F5F7FA] outline-none px-4 rounded-[8px]' />
         
        </div>

      </div>


    </div>
  )
}

export default footer