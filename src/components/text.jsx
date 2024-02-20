import React from 'react'

const text = ({imgUrl , title , text}) => {
  return (
    <div className='flex flex-col justify-center items-center w-[300px] rounded-8 bg-neutral-white shadow-md px-[2rem] py-[2rem] hover:shadow-xl'>

      <div className='flex justify-center items-center'>
          <img className='z-10' src={imgUrl} alt="" />
          <div className=' ml-[-2.2rem] mt-[1rem] bg-[#E8F5E9] w-[50px] h-[49px] rounded-tl-[18px] rounded-tr-[5px] rounded-br-[10px] rounded-bl-[5px] rounded-' />
      </div>

      <h1 className='text-center w-[256px] font-semibold text-[34px] leading-[44px]'>{title}</h1>
      <p className='text-center mt-3'>{text}</p>
    </div>
  )
}

export default text