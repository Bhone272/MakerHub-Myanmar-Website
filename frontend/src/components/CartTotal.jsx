import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const {currency , delivery_fee, getCartAmount} = useContext(ShopContext);

  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'TOTAL'} text2={'COST'}/>
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='felx justify-between'>
                <p>Subtotal</p>
                <p>{getCartAmount()}.000 &nbsp;&nbsp;{currency}</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <p>Transportation Charges</p>
                <p>{delivery_fee}.00 &nbsp;&nbsp;{currency}</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{getCartAmount()===0 ? 0 : getCartAmount() + delivery_fee}.00 &nbsp;&nbsp;{currency}</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal