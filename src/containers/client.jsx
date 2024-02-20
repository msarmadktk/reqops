import React from 'react'

import logo01 from '../assets/logo01.svg';
import logo02 from '../assets/logo02.svg';
import logo03 from '../assets/logo03.svg';
import logo04 from '../assets/logo04.svg';
import logo05 from '../assets/logo05.svg';

const client = () => {
  return (
    <div className='flex flex-col jsutify-center items-center mt-[2rem]'>

        <h1 className='text-[36px] font-semibold'>Our Clients</h1>
        <p className='text-center'>We have been working with some Fortune 500+ clients</p>

        <div className='flex flex-row flex-wrap justify-between mt-8 w-[80%]'>
            <img className='menu:w-[28px]' src={logo01} alt="" />
            <img className='menu:w-[28px]' src={logo02} alt="" />
            <img className='menu:w-[28px]' src={logo03} alt="" />
            <img className='menu:w-[28px]' src={logo04} alt="" />
            <img className='menu:w-[28px]' src={logo05} alt="" />
        </div>
      
    </div>
  )
}

export default client