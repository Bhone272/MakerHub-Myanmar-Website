import React from 'react'
import { assets } from '../assets/assets'

const Opening = () => {
  return (
    <div className='flex flex-row sm:flex-row  border border-gray-600'>
        {/* Main left Side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-gray'>
                
                <h1 className='prata-regular text-center font-bold text-3xl sm:py-3 lg:text-5xl leading-relaxed'> Innovation, Creativity & Community</h1>
                
            </div>

        </div>
        {/* Main Right Side*/}
        <img className='w-1/2 sm:w-1/2'src={assets.Openpic} alt=" "/>
    </div>
  )
}

export default Opening