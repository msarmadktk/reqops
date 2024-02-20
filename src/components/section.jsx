import React from 'react'

const section = ({imgUrl , title , text}) => {
  return (
    <div className='flex flex-row justify-center items-center gap-8 md:flex-col'>

      <div className='flex justify-center items-center'>
        <img className='w-[442px] h-[433px]' src={imgUrl} alt="" />
      </div>

      <div className='flex flex-col justify-center items-start w-[50%]'>
        <h1 className='text-left font-semibold text-[32px] leading-[44px]'>{title}</h1>
        <p className='text-left mt-4'>{text}</p>
        <button type='button' className='flex px-4 py-2 mt-4 text-white justify-center items-center gap-10 rounded-4 bg-[#4CAF4F]'>Learn More</button>

      </div>
      
    </div>
  )
}

export default section