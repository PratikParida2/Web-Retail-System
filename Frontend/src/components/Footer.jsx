import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Discover the latest trends in fashion with our exclusive collection of stylish dresses. Shop with confidence, enjoy secure payments, fast shipping, and hassle-free returns. Stay connected with us for exciting offers and updates!</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Help</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Get In Touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 9692642841</li>
                <li>shopnow@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
            <hr/>
            <p className='py-5 text-sm text-center'>© 2025 ShopNow. All Rights Reserved. </p>
        </div>
    </div>
  )
}

export default Footer
