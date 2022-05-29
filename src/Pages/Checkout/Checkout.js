import React from 'react'
import { CheckoutForm } from '../../components/Checkout/CheckoutFormSteps'

export const Checkout = () => {
  return (
    <div className='flex flex-col justify-center mt-10 w-full text-center'>
        <h1 className='text-2xl'>Where should we send the order?</h1>
        <p className='text-xs text-gray-500 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Doloremque, labore beatae autem ipsa</p>

        <CheckoutForm />
    </div>
  )
}
