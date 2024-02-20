import React from 'react'

import {Text} from '../components'
import commnuity02 from '../assets/commnuity02.svg'
import community01 from '../assets/community01.svg'
import coummunity03 from '../assets/coummunity03.svg'

const community = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[6rem]'>
       
        <div>
        <h1 className='font-semibold text-[36px] text-center leading-[44px] sm:text-[30px] sm:leading-[37px]'>Manage your entire community  <br className='hidden xl:block'/> in a single system</h1>
        <p className='text-center mt-2'>Who is Nextcent suitable for?</p>

        </div>
        <div className='flex flex-row justify-around menu:w-[50%] flex-wrap gap-8 items-center w-full mt-8 '>
            <Text title={"Membership Organisations"} text={"Our membership management software provides full automation of membership renewals and payments"} imgUrl={community01} />
            <Text title={"National Associations"} text={"Our membership management software provides full automation of membership renewals and payments"} imgUrl={commnuity02} />
            <Text title={"Clubs And Groups"} text={"Our membership management software provides full automation of membership renewals and payments"} imgUrl={coummunity03} />
        </div>
    </div>
  )
}

export default community