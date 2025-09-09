import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';
import { Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:flex">
      {/* Mobile topbar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-gray-900 text-white w-full">
        <div className="flex items-center space-x-2">
          <img src={assets.logo} alt="logo" className="h-8 bg-white p-1 rounded" />
          <span className="font-semibold text-lg">Admin Panel</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar (mobile & desktop) */}
      <div
        className={`fixed md:relative z-40 top-0 left-0 h-full bg-gray-900 text-white w-64 p-6 space-y-8 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={assets.logo} alt="Logo" className="h-10 w-auto bg-white p-1 rounded" />
          <span className="text-xl font-semibold">Admin</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-4 text-sm font-medium">
          <Link to="/add" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
            ➕ Add Product
          </Link>
          <Link to="/orders" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
            📦 Orders
        </Link>
          <Link to="/list" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
            📦 View Products
          </Link>
        </nav>

        {/* Logout */}
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
