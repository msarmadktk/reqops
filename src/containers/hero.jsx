import React from 'react'
import { Navbar } from '../components'
import heroImg from '../assets/heroImg.svg'
const hero = () => {
  return (

    <div className='flex flex-col px-[2rem] gap-[4rem] bg-[#F5F7FA]'>
      <Navbar />

      <div className='flex flex-row md:flex-col justify-around items-center gap-8'>

        <div className='flex flex-col justify-center items-start'>

          <h1 className='text-[64px] heading:text-[50px] heading:leading-[55px] font-semibold leading-[70px]'>Lessons and insights </h1>
          <h1 className='text-[64px] heading:text-[50px] heading:leading-[55px] text-[#4CAF4F] leading-[70px] font-semibold'>from 8 years</h1>
          <p className='mt-4'>Where to grow your business as a photographer: site or social media?</p>

          <button className='flex gap-10 px-[14px] py-[12px] text-white bg-[#4CAF4F] mt-8' type='button'>Register</button>

        </div >

        <div className='flex flex-col justify-center items-start ml-[2rem]' >
          <img className='h-[407px] w-[391px]' src={heroImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default hero