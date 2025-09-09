import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Order from './pages/Order';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import ProfileDetails from './pages/ProfileDetails';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <NavBar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/profile' element={<ProfileDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
