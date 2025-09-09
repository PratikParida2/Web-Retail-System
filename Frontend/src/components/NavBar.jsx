import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import {NavLink,Link} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const NavBar = () => {

  const [visible,setVisible]=useState(false);
  const {showSearch,setShowSearch,getCartCount,token,setToken,navigate}=useContext(ShopContext);

  const handleLogout=()=>{
    console.log("Logout para clicked");
    localStorage.removeItem('CartItemsData');
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
    console.log("Logout Successfully");
    console.log(token);
  }
  // useEffect(()=>{

  // },[token]);

  return (
    <div className='flex items-center justify-between py-5 font-medium '>
      <Link to={'/'}><img src={assets.logo} alt="logo" className='w-36' /></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>Collections</p>
            <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>About</p>
            <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>Contact</p>
            <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img onClick={()=>setShowSearch(!showSearch)} src={assets.search_icon} className='cursor-pointer w-5' alt="" />

        <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
            <p className='absolute right-[-5px] bottom-[-5px] w-[18px] leading-4 bg-black text-[#e61b1b] aspect-square rounded-full text-[10px] text-center'>{getCartCount()}</p>
        </Link>
        <div className='group relative'>
           <Link to={!token && '/login'}><img src={assets.profile_icon} className='cursor-pointer w-5' alt="" /></Link>
          {token &&  <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                  <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-slate-500 rounded'>
                      <Link to={'/profile'}  > <p className='cursor-pointer hover:text-black'>My Profile</p></Link>
                      <p className='cursor-pointer hover:text-black' onClick={()=>{navigate('/order')}}>Orders</p>
                      <p className='cursor-pointer hover:text-black' onClick={()=>handleLogout()} >Logout</p>
                  </div>
            </div>}
        </div>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
      </div>
      {/* Side Bar Menu For Smaller Screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div onClick={()=>setVisible(false)} className='flex flex-col text-gray-600 cursor-pointer'>
              <div className='flex items-center gap-4 p-3'>
                <img className='h-4 rotate-180 ' src={assets.dropdown_icon} alt="" />
                <p>Back</p>
              </div>
              <NavLink to='/' className='pl-6 py-2 border'>Home</NavLink>
              <NavLink to='/collection' className='pl-6 py-2 border'>Collections</NavLink>
              <NavLink to='/about' className='pl-6 py-2 border'>About</NavLink>
              <NavLink to='/contact' className='pl-6 py-2 border'>Contact</NavLink>
          </div>
      </div>
    </div>
  )
}

export default NavBar
