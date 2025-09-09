import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ShowProduct from './ShowProduct';
import { useEffect } from 'react';
const BestSeller = () => {
    const {products}=useContext(ShopContext);
    useEffect(()=>{},[products])
  return (
    <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'Best'} text2={'Seller'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Customer favorite! Grab our best seller before it’s gone!
            </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                {products.map((item,index)=>item.bestSeller?<ShowProduct key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>:null)}
            </div>
    </div>
  )
}

export default BestSeller
