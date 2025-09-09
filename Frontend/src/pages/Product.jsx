import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { ShopContext } from '../context/ShopContext';
import ShowProduct from '../components/ShowProduct';
import { assets } from '../assets/frontend_assets/assets';
import Related from '../components/Related';

const Product = () => {
  const {products,currency,addToCart,token,navigate}=useContext(ShopContext);
  // console.log(products);
  const [size,setSize]=useState('');
  const parameter=useParams();
  let index=-1;

  
  
  for(let i=0;i<products.length;i++)
  {
    if(products[i]._id===parameter.productId)
    {
      index=i;
      break;
    }
  }
  // if(index===-1)
  // {
  //   return <h1 className='text-center'>Product Not Found</h1>
  // }
  // console.log(index);
  return index!=-1?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            <img src={products[index].image} alt="" />
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={products[index].image} alt="" />
          </div>
        </div>
        {/* Product Info */}
        <div className='flex-1 '>
          <h1 className='font-medium text-2xl mt-2'>{products[index].name}</h1>
          <div className='flex item-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon}  alt="" className="w-3 5" />
              <img src={assets.star_icon}  alt="" className="w-3 5" />
              <img src={assets.star_icon}  alt="" className="w-3 5" />
              <img src={assets.star_dull_icon}  alt="" className="w-3 5" />
              <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{products[index].price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{products[index].description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {products[index].sizes.map(item=><button  key={item} className={`border py-2 px-4 bg-gray-100 cursor-pointer ${size===item?'border-orange-500':''}`} onClick={()=>{setSize(item)}} >{item}</button>)}
            </div>
          </div>

       <button className='bg-gray-700 text-white px-8 py-3 text-sm active:bg-gray-900 cursor-pointer ' onClick={()=>{token!=='' ?addToCart(products[index]._id,size):navigate('/login')}}>Add To Cart</button>
       <hr className='mt-8 sm:w-4/5' />

       <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
        <p>100% Original Product</p>
        <p>Cash On Delivery Is Available</p>
        <p>Easy Return And Exchange Policy Within 7 Days</p>
       </div>

        </div>
      </div>

      {/* Description And Review Section */}
      <div className='mt-20'>
          <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Description</b>
            <p  className='border px-5 py-3 text-sm'>Reviews (122)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p>Step into style with ShopNow, your ultimate destination for stunning dresses! From chic casual wear to elegant evening gowns, we offer a curated collection that suits every occasion.</p>
              <p>✨ Perfect Fit for Every Body Type – We believe fashion is for everyone, which is why our collection includes inclusive sizes and customized fits. Whether you love a flowy maxi, a sleek bodycon, or a classic A-line, we ensure that you feel confident and beautiful in every dress you wear.

Find your perfect dress today and redefine your style! Shop now at ShopNow!</p>
          </div>
      </div>

      {/* Related Product...... */}
      <Related category={products[index].category} subCategory={products[index].subCategory}/>
    

    </div>

  ):<div className='opacity-0'>Product Is Not Found</div>
}

export default Product
