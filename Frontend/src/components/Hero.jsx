import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 justify-between'>
      {/* Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 pl-20'>
            <div className='text-gray-600'>
                <div className='flex gay-2 items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-slate-600'></p>
                    <p className='font-medium text-sm md:text-base'>Our Bestsellers</p>
                </div>
                <h1 className='text-3xl sm:py-3 lg:text-4xl leading-relaxed'>Summer Collection 2025 - New Arrivals</h1>
                <div className='flex gay-2 items-center gap-2'>
                    <p className='font-medium text-sm md:text-base'>Shop Now</p>
                    <p className='w-8 md:w-11 h-[2px] bg-slate-600'></p>
                </div>
            </div>
            
      </div>

      {/* Right Side */}
    
      <img className='w-fit' src={assets.hero_img} alt="" />

    </div>
  )
}

export default Hero
