import React from 'react'

const NewsLetterBox = () => {
    const handleSubmit=(event)=>
    {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Sign Up for Exclusive Offers, New Arrivals & 20% Off Your First Purchase!</p>
      <p className='text-gray-400 mt-3'>
      Join Our VIP List – Get 20% Off & Exclusive Deals!
      </p>
      <form className='w-full sm:w-1/2 flex items-center gep-3 mx-auto my-6 border pl-3' onSubmit={handleSubmit}>
        <input className='w-full sm:flex-1 outline-none' type="email"  placeholder='Enter Your Email' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
