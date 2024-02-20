import React from 'react'
import { Bloging } from '../components'
import blog01 from '../assets/blog01.png'
import blog02 from '../assets/blog02.png'
import blog03 from '../assets/blog03.png'


const blog = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-8'>
      <h1 className='text-[36px] text-center font-semibold'>Caring is the new marketing</h1>
      <p className='text-center w-[50%] mt-4'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
      
      <div className='flex flex-row flex-wrap gap-8 mt-8 justify-around'>
        <Bloging imgUrl={blog01} text={"Creating Streamlined Safeguarding Processes with OneRen"}/>
        <Bloging imgUrl={blog02} text={"What are your safeguarding responsibilities and how can you manage them?"}/>
        <Bloging imgUrl={blog03} text={"Revamping the Membership Model with Triathlon Australia"}/>

      </div>
    </div>
  )
}

export default blog