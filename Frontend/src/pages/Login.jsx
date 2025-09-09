import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ShopContext } from '../context/ShopContext';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
const Login = () => {
  const navigate=useNavigate();
  const [currentState,setCurrentState]=useState('Login');
  const {backend_url,token,setToken} =useContext(ShopContext);
  
  const formRef=useRef();
  const nameRef = useRef();
  const emailRef=useRef();
  const passwordRef=useRef();
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(currentState==='SignUp')
    {
      const userData={
        name:nameRef.current.value,
        email:emailRef.current.value,
        password:passwordRef.current.value
      }
      try {
        const response=await axios.post(backend_url+'/api/user/register',userData);
         console.log(response);
        if(response.status==201)
        {
          toast.success("User Register Successfully");
          formRef.current.reset();
          // setCurrentState('Login');
        }
        else
        {
          toast.error(message);
        }
        
      } 
      catch (error) {
        toast.error("Error in Registering User");
        console.log(error);
      }
    }
    else
    {
      const userData={
        email:emailRef.current.value,
        password:passwordRef.current.value
      }
      try {
        const response=await axios.post(backend_url+'/api/user/login',userData);
        if(response.status==201)
        {
          toast.success("User Login Successfully");
          localStorage.setItem("token",response.data.token);
          setToken(response.data.token);
          formRef.current.reset();
          navigate('/');
        }
        else
        {
          toast.error("Enter EmailId And Password Correctly");
        }
        
      } 
      catch (error) {
         toast.error("Enter Email And Password Correctly");
        console.log(error);
      }
    }
}
  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
      {currentState === 'SignUp' ? 'Create Account' : 'Welcome Back'}
    </h2>

    <form
      ref={formRef}
      onSubmit={handleSubmit}
    >
      {currentState === 'SignUp' && (
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your Name"
            name="name"
            ref={nameRef}
            required
          />
        </div>
      )}

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
          name="email"
          ref={emailRef}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
          onKeyDown={(e) => {
            const blockedChars = [' ', '+', '-', '/', '*', '%'];
            if (blockedChars.includes(e.key)) {
              e.preventDefault();
            }
          }}
          ref={passwordRef}

          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer"
      >
        {currentState}
      </button>
    </form>

    {currentState === 'Login' && (
      <div className="w-full flex justify-center text-center text-sm mt-2">
        <p className="cursor-pointer text-blue-500 hover:underline">
          Forget Password?
        </p>
      </div>
    )}

    <p className="text-center text-gray-600 mt-4">
      {currentState === 'SignUp' ? (
        <>
          Have an account?{' '}
          <a
            href="#"
            onClick={() => setCurrentState('Login')}
            className="text-blue-500 hover:underline"
          >
            Login
          </a>
        </>
      ) : (
        <>
          Don't have an account?{' '}
          <a
            href="#"
            onClick={() => setCurrentState('SignUp')}
            className="text-blue-500 hover:underline"
          >
            SignUp
          </a>
        </>
      )}
    </p>
  </div>
</div>

  )
}

export default Login
