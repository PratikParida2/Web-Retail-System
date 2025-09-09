import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const {products,currency,cartItem,upDateCartItem,navigate}=useContext(ShopContext);
  const [cartData,setCartData]=useState([]);
  useEffect(()=>{
    const tempData=[];
    for(const items in cartItem)
    {
      for(const item in cartItem[items])
      {
        if(cartItem[items][item]>0)
        {
          tempData.push({
            _id:items,
            size:item,
            quantity:cartItem[items][item],
          })
        }
      }
    }
    setCartData(tempData);
    
  },[cartItem]);
  
  return cartData.length>0?(
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'Your'} text2={'Cart'}/>
      </div>
      <div>
        {
          cartData.map((item,index)=>{
            const productData=products.find((product)=>product._id===item._id);
            console.log("product data from cart: "+productData);
            return (
              <div key={index} className='py-4 border-b border-t text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grids-cols-[4fr_0.5fr_0.5fr] items-center gap-4 ' >
                  <div className='flex items-start gap-6'>
                      <img className='w-16 sm:w-20 ' src={productData.image} alt={productData.name} />
                      <div>
                        <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                        <div className='flex items-center gap-5 mt-2'>
                            <p>{currency}{productData.price}</p>
                            <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                        </div>
                      </div>
                  </div>
                  <input onChange={(e)=>e.target.value==='' || e.target.value==='0' ? null : upDateCartItem(item._id,item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 ' type="number" defaultValue={item.quantity} min={1} />
                  <img src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' onClick={()=>upDateCartItem(item._id,item.size,0)} alt="" />
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/place-order')} className=' bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer text-sm my-8 px-8 py-3'>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  ):
    <div>
  <div className='text-2xl mb-3'>
  <Title text1={'Your'} text2={'Cart'}/>
</div>
  <h1 className='text-center text-3xl'>Cart Is Empty</h1>
  <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/place-order')} className=' bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer text-sm my-8 px-8 py-3'>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
}

export default Cart


