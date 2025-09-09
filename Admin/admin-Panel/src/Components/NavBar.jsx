import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';
import  Context, { storeContext }  from '../Context/Context.jsx';
import { useContext } from 'react';
const NavBar = () => {
 const{token,setToken}=useContext(storeContext);
  return (
    <nav className="bg-gray-900 text-white shadow">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
        <Link to='/' >
        <img
            src={assets.logo}
            alt="Logo"
            className="h-10 w-auto rounded bg-white p-1"
          /> 
        </Link>
        <Link to='/' ><span className="text-xl font-semibold">Admin Panel</span></Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <NavLink to="/add" className="hover:text-gray transition 
">
              Add Product
            </NavLink>
          </li>
 
          <li>
            <NavLink to="/list" className="hover:text-gray-300 transition ">
              View Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className="hover:text-gray-300 transition">
              Orders
            </NavLink>
          </li>
        </ul>

        {/* Logout Button */}
       
        <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm transition cursor-pointer" onClick={()=>setToken("")}>
          Logout
        </button>
     
      </div>
    </nav>
  );
};

export default NavBar;