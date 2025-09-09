import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ShowProduct from './ShowProduct';
const LatexCollection = () => {
    const products=useContext(ShopContext);
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
            <Title text1={'Latest'} text2={'Arrival'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Fresh new arrival – grab yours before it's gone!
            </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>

        {products.products.map((item, index) => index<10 ?<ShowProduct key={index} id={item._id} name={item.name} image={item.image} price={item.price} />:null)}
      </div>
    </div>
  )
}

export default LatexCollection
