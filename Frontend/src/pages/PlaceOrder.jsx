import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method,setMethod]=useState('cod');
  const {navigate}=useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3 '>
            <Title text1={'DELIVERY'} text2={' INFORMATION'}/>
          </div>
          <div className='flex gap-3 '>
              <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First Name' required/>
              <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' required/>
          </div>
          <input type="email" className='border border-gray-300 rounded py-1.5 px-3.5 w-full'  placeholder='Email Address' required/>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Address' required/>
          <div className='flex gap-3'>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' required/>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State' required/>
          </div>
          <div className='flex gap-3'>
          <input type="tel" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone Number' required/>
          </div>
      </div>

      {/* Right Side */}
      <div className='mt-8'>
          <div className='mt-8 min-w-80'>
              <CartTotal/>
          </div>
          <div className='mt-8'>
            <Title text1={'PAYMENT'} text2={' METHOD'}/>
            {/* Payment Method Selections */}
            <div className='flex gap flex-col lg:flex-row'>
                <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' onClick={()=>setMethod('stripe')}>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'?'bg-blue-700':''}`}></p>
                    <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                </div>
                <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' onClick={()=>setMethod('razorpay')}>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay'?'bg-blue-700':''}`}></p>
                    <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
                </div>
                <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' onClick={()=>setMethod('cod')}>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod'?'bg-blue-700':''}`}></p>
                    <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
        
                </div>
            </div>
            <div className='w-full text-end mt-8 '>
                <button onClick={()=>navigate('/order')} className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer'>Place Order</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default PlaceOrder
