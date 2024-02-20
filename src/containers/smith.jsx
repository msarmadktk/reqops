import React from 'react'
import tesla from '../assets/tesla.png'
const smith = () => {
  return (
    <div className='flex flex-row justify-center items-center md:flex-col bg-[#F5F7FA] mt-[4rem] gap-8 py-[2rem]'>

      <div className='flex justify-center items-center '>
        <img className='w-[326px] h-[326px] sm:w-[250px] sm:h-[250px]' src={tesla} alt="" />
      </div>

      <div className='flex flex-col justify-start w-[50%] items-start'>
        <p className=' font-[500] text-[#717171]'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
        <h1 className='text-[#4CAF4F] font-[700] mt-4'>Tim Smith</h1>
        <p className='mt-2 font-[400] text-[#89939E]'>British Dragon Boat Racing Association</p>
      </div>

    </div>
  )
}

export default smith