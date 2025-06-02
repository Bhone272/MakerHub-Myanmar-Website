import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-row sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

        <div>
            <img src={assets.Policy_icon} className='w-12 m-auto mb-5' alt=""/>
            <p className='font-semibold'>Our Policy and Privacy</p>
        </div>
        <div>
            <img src={assets.Quality} className='w-12 m-auto mb-5' alt=""/>
            <p className='font-semibold'>Return Policy</p>
            <p className='text-gray-400'>We provide 10 days return policy<br/> except user faults.</p>
        </div>
        <div>
            <img src={assets.Support} className='w-12 m-auto mb-5' alt=""/>
            <p className='font-semibold'>Customer Support</p>
            <p className='text-gray-400'>We provide 24/7 customer support.</p>
        </div>
    </div>
  )
}

export default OurPolicy