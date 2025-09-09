import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img  className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to <span className='text-gray-900 font-bold'>ShopNow</span>, your go-to destination for trendy and high-quality fashion. We believe that style should be affordable, comfortable, and accessible to everyone. Whether you're looking for casual wear, party outfits, or everyday essentials, we’ve got something for every occasion.</p>
        <p>
        At <span className='text-gray-900 font-bold'>ShopNow</span>, we focus on:
        <br />
✅ Premium Quality – Handpicked fabrics for comfort & durability.
<br />
✅ Latest Trends – Stay ahead with our stylish and trendy collections.
<br />
✅ Affordable Prices – Fashion that fits your budget.
<br />
✅ Easy Shopping Experience – Smooth navigation, secure checkout & fast delivery.
        </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
