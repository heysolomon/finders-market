import React from 'react'
import { Success } from '../../components/Checkout/Steps/Success'

export const CheckoutSuccess = () => {
  return (
    <div className='flex flex-col justify-center mt-10 w-full text-center'>
    <h1 className='text-2xl'>Yes, you have successfully ordered!</h1>
        <p className='text-xs text-gray-500 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Doloremque, labore beatae autem ipsa</p>
        <Success />
    </div>
  )
}
