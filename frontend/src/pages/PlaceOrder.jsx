import React, { useContext } from 'react'
import Title from '../components/Title'
import CartTotal from "../components/CartTotal";
import { assets } from '../assets/assets';
import { useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {

  const [method,setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);
  
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
    {/*   Left Side    */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div> 
        <div className='flex gap-3'>
          <input className='border border-gray-500 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First Name'/>
          <input className='border border-gray-500 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last Name'/>
        </div>
        <input className='border border-gray-500 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email Address'/>
        <input className='border border-gray-500 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street'/>
        <div className='flex gap-3'>
          <input className='border border-gray-500 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City'/>
          <input className='border border-gray-500 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State(or)Division'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-500 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Postal Code'/>
          <input className='border border-gray-500 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country'/>
        </div>
        <input className='border border-gray-500 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone no.'/>
      </div>
      {/*   Right Side    */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          <div className='flex gap-3 flex-col lg:flex-row'>
            {/* Payment method selection */}
            <div className='flex  gap-3 flex-col lg:flex-row'>
              <div onClick={()=>setMethod('kpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'kpay' ? 'bg-green-400' : ''}`}></p>
                <img className='h-5 mx-4' src={assets.KBZpay} alt=""/>
              </div>
              <div onClick={()=>setMethod('ayapay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'ayapay' ? 'bg-green-400' : ''}`}></p>
                <img className='h-5 mx-4' src={assets.Ayapay} alt=""/>
              </div>
              <div onClick={()=>setMethod('visapay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'visapay' ? 'bg-green-400' : ''}`}></p>
                <img className='h-5 mx-4' src={assets.Visa} alt=""/>
              </div>
              <div onClick={()=>setMethod('masterpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'masterpay' ? 'bg-green-400' : ''}`}></p>
                <img className='h-5 mx-4 ' src={assets.Mastercard} alt=""/>
              </div>
              <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                <p className='text-gray-700 text-xs font-medium mx-4'>CASH ON DELIVERY</p>
              </div>
            </div>
          </div>
          <div>
              <div className='w-full text-end mt-8'>
              <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm active:bg-gray-500'>PLACE ORDER</button>

              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder