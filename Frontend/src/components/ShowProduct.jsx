import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router';
const ShowProduct = ({id,name,image,price}) => {
    const {currency,products}=useContext(ShopContext);
  return (
    <Link  className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden' >
            <img className='hover:scale-110 transition ease-in-out' src={image} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ShowProduct
