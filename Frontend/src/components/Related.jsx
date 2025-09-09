import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ShowProduct from './ShowProduct';
const Related = ({category,subCategory}) => {
    const {products}=useContext(ShopContext);
    const [related,setRelated]=useState([]);
    useEffect(()=>{
        
        
        
        let productCopy=products.slice();
        productCopy=productCopy.filter((item)=>category===item.category);
        
        productCopy=productCopy.filter((item)=>item.subCategory===subCategory);

        setRelated(productCopy);
        
    },[category,subCategory])
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={"PRODUCTS"}/>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item,index)=>(<ShowProduct key={index} name={item.name}  image={item.image} price={item.price} id={item._id}/>))}
        </div>
    </div>
  )
}

export default Related