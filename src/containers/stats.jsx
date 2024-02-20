import React from 'react'
import stats01 from '../assets/stats01.svg'
import stats03 from '../assets/stats03.svg'
import stats02 from '../assets/stats02.svg'
import { GiClubs } from "react-icons/gi";
import stats04 from '../assets/stats04.svg'

const stats = () => {
  return (
    <div className='flex flex-row md:flex-col justify-between px-[5rem] py-[2rem] items-center sm:flex-col bg-[#F5F7FA] mt-[4rem]'>

      <div className='flex flex-col'>
        <h1 className='font-semibold menu:text-[28px] menu:leading-[30px] text-[32px] leading-[44px]'>Helping a local  <br className='hidden xl:block' /> <span className='text-[#4CAF4F]'> business reinvent itself</span></h1>
        <p>We reached here with our hard work and dedication</p>
      </div>

      <div className='flex flex-col mt-[3rem]'>

        <div className='flex gap-8 flex-wrap'>
          <div className='flex flex-row gap-4 justify-center items-center'>
            <img src={stats01} alt="" />
            <div>
              <h1 className='text-[28px]'>2,245,341</h1>
              <p>Members</p>
            </div>
          </div>

          <div className='flex flex-row gap-4 justify-center items-center'>
            {/* <img src={stats02} alt="" /> */}
            <GiClubs className='text-[#4CAF4F]' size={48}/>
            <div>
              <h1 className='text-[28px]'>46,328</h1>
              <p>Clubs</p>
            </div>
          </div>

        </div>

        <div className='flex mt-4 gap-8 flex-wrap'>

          <div className='flex flex-row gap-4 justify-center items-center'>
            <img src={stats03} alt="" />
            <div>
              <h1 className='text-[28px]'>828,867</h1>
              <p>Event Bookings</p>
            </div>
          </div>

          <div className='flex flex-row gap-4 justify-center items-center'>
            <img src={stats04} alt="" />
            <div>
              <h1 className='text-[28px]'>1,926,436</h1>
              <p>Payments</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default stats