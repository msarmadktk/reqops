import React from 'react'


const bloging = ({ imgUrl, text }) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={imgUrl} className='rounded-[8px] w-[368px] h-[286px]' alt="" />
            <div className='flex flex-col p-5 mt-[-4rem] bg-white justify-center items-center rounded-8 bg-neutral-silver shadow-2xl'>
                <h1 className='w-[285px] text-[20px] text-[#717171] text-center font-semibold'>{text}</h1>
                <h1 className='w-[285px] cursor-pointer text-[20px] text-[#4CAF4F] text-center font-semibold'>Readmore <span className='text-[25px] font-extrabold'>&rarr;</span></h1>


            </div>
        </div>
    )
}

export default bloging