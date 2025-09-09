import NavBar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add.jsx'
import List from './pages/List.jsx'
import Order from './pages/Order.jsx'
import SideBar from './Components/SideBar.jsx'
import Login from './Components/Login.jsx'
import  Context, { storeContext }  from './Context/Context.jsx'
import { useContext, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home.jsx'
export const backend_url = import.meta.env.VITE_BACKEND_URL;
function App() {
  const {token,setToken}=useContext(storeContext);
  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {token===""?<Login/>:        <>
        <div className='hidden md:block'>
        <NavBar/>
        </div>
         <hr></hr>
         <div className='block md:hidden'>
          <SideBar/>
         </div>
         
         <Routes >
          <Route path='/add' element={<Add/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/orders' element={<Order/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
        </>
}
    </div>
  )
}

export default App
