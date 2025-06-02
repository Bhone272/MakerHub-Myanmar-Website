import React from 'react'
import { assets } from '../assets/assets'

const Community = () => {
  return (
   <div className='flex flex-row sm:flex-row  border border-gray-600'>
        {/* Main Right Side*/}
        <img className='w-1/2 sm:w-1/2'src={assets.Community_pic} alt=" "/>
           {/* Main left Side */}
           <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
               <div className='text-gray'>
                   
                   <h1 className='prata-regular text-center font-bold text-3xl sm:py-3 lg:text-5xl leading-relaxed'> 
                   Join Our community
                   </h1>
                   <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Explore new things & improve your creativity.
                   </p>
                   
               </div>
   
           </div>
           
       </div>
  )
}

export default Community