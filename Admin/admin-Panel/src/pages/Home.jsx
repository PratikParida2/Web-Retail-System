import React from "react";
import { Link,NavLink } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
const Home = () => {
  const[totalUsers,setTotalUsers]=useState(0);
  const getTotalUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user/getusers", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
  
      return response.data.users; // Return total count
    } catch (error) {
      console.error("Error fetching total users:", error.message);
      return null;
    }
  };
  
  // Call it inside another async function
  useEffect(()=>{
    const fetchTotalUsers = async () => {
      const total = await getTotalUsers();
      if (total !== null) {
        setTotalUsers(total);
      }
    };
    fetchTotalUsers();
  },[]);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Section */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome, Admin 👋</h1>
        <p className="text-gray-600 mb-6">Here’s a quick overview of your dashboard.</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
            <p className="text-2xl font-bold text-blue-600 mt-2">{totalUsers}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">Orders</h2>
            <p className="text-2xl font-bold text-green-600 mt-2">57</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">Revenue</h2>
            <p className="text-2xl font-bold text-purple-600 mt-2">₹4,320</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="flex gap-4 flex-wrap">
          <Link to='/add'>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer">
              ➕ Add Product
            </button>
            </Link>
            <Link to='/orders'>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl cursor-pointer">
              📦 Orders
            </button>
            </Link>
            <Link to='/list'>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl cursor-pointer">
              📝 List Products
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
