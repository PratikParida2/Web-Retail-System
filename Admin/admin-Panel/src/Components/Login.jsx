import React, { useState } from "react";
import axios from "axios";
import { useContext ,useEffect} from "react";
import { storeContext } from "../Context/Context.jsx";
import { toast } from "react-toastify";
const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const {token,setToken}=useContext(storeContext);
    
    const onSubmitHandler=async(e)=>
    {
        try {
            e.preventDefault();
            setEmail(e.target.email.value);
            setPassword(e.target.password.value);
            const response=await axios.post("http://localhost:5000/api/user/admin",{
                email:e.target.email.value,
                password:e.target.password.value
            });
            if(response.data && response.status===201)
            {
              setToken(response.data);
            }
            else
            {
              toast.error("Invalid credentials");
            }
            
        } catch (error) {
          toast.error("Invalid credentials");
          console.error("Error:", error.response?.data || error.message);
        }
    }
    console.log(email);
    console.log(password);
    
    
  return (
    <div className="min-h-screen bg-[#1a2433] flex items-center justify-center px-4">
      <div className="bg-[#202d43] p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Admin Login</h2>
        
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded bg-[#2c3b52] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="admin@example.com"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded bg-[#2c3b52] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-300 text-black font-semibold py-2 rounded hover:bg-amber-400 transition duration-200 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
