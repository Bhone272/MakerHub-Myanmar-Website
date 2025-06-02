import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex felx-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.Logo} className='mb-5 w-32' alt=""></img>
                <p className='w-full text-l md:w-2/3 text-gray-600'>Myanmar’s first DIY tech marketplace</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>MakerHub Myanmar</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>HOME</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+959956209675</li>
                    <li>MakerHubMM@gmail.com</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer