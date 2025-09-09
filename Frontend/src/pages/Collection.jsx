import React, { useEffect, useMemo } from 'react'
import { ShopContext } from '../context/ShopContext'
import {useContext,useState} from 'react'
import ShowProduct from '../components/ShowProduct';
import { Link } from 'react-router';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';
const Collection = () => {
  const {products,search,showSearch}=useContext(ShopContext);
  const [filterProduct,setFilterProduct]=useState([]);
  const [showFilter,setShowFilter]=useState(false);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const [sorted,setSorted]=useState("Relavent");
  const toggleCategory=(e)=>
  {
     let value=e.target.value;
     setCategory((prev)=>prev.includes(value)?prev.filter((item)=>item!==value):[...prev,value]);
  }

  const toggleSubCategory=(e)=>
    {
       let value=e.target.value;     
       console.log(value);
         
       setSubCategory((prev)=>prev.includes(value)?prev.filter((item)=>item!==value):[...prev,value]);
    }
  useEffect(()=>
    {
      setFilterProduct(products);
    }
    ,[]);

  

    const applyFilter=()=>
    {
      let productCopy=products.slice();
      if(search.length>0 && showSearch)
      {
        productCopy=productCopy.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));
      }
      if(category.length>0)
      productCopy=productCopy.filter((item)=>category.includes(item.category));
      if(subCategory.length>0)
      {
        productCopy=productCopy.filter((item)=>subCategory.includes(item.subCategory));
      }
      setFilterProduct(productCopy)
    }

      function handleSorted(e)
      {
         let value=e.target.value;
         let sortedProduct=filterProduct.slice();
         switch (value) {
          case "LowToHigh":
            {
              sortedProduct.sort((a,b)=>(a.price-b.price));
              setSorted("LowToHigh");
              setFilterProduct(sortedProduct);
              break;
            }
          case "HighToLow":
            {
              sortedProduct.sort((a,b)=>(b.price-a.price));
              setSorted("HighToLow");
              setFilterProduct(sortedProduct);
              break;
            }
          default:
            setSorted("Relavent");
            applyFilter();
            break;
         }
      }

   
  useMemo(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch,products])   
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Section */}

        <div className='min-w-60'>
          <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 '>Filters
          <img className={`h-3 sm:hidden ${showFilter ?'rotate-90':''}`}  src={assets.dropdown_icon} alt="" />
          </p>
          {/* Filter by Category */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'} sm:block cursor-pointer`}>
              <p className='mb-1 text-sm font-medium'>Categories</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            
                  <label className="flex items-center space-x-2 cursor-pointer gap-2">
                    <input 
                      className="w-3" 
                      type="checkbox" 
                      value="Men" 
                      name="Men" 
                      onChange={toggleCategory}
                    />
                    Men
                  </label>
   
              
                <label className="flex items-center space-x-2 cursor-pointer gap-2">
                  <input 
                    className="w-3" 
                    type="checkbox" 
                    value="Women" 
                    name="Women" 
                    onChange={toggleCategory}
                  />
                  Women
                </label>
          
                <label className="flex items-center space-x-2 cursor-pointer gap-2">
                  <input 
                    className="w-3" 
                    type="checkbox" 
                    value="Kids" 
                    name="Kids" 
                    onChange={toggleCategory}
                  />
                  Kids
                </label>
                </div>
          </div>
          {/* Sub Categories */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter?'':'hidden'} sm:block cursor-pointer`}>
              <p className='mb-1 text-sm font-medium'>Type</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <label className="flex items-center space-x-2 cursor-pointer gap-2">
                  <input 
                    className="w-3" 
                    type="checkbox" 
                    value="Topwear" 
                    name="Topwear" 
                    onChange={toggleSubCategory}
                  />
                  TopWear
                </label>
                <label className="flex items-center space-x-2 cursor-pointer gap-2">
                  <input 
                    className="w-3" 
                    type="checkbox" 
                    value="Bottomwear"
                    name="BottomWear" 
                    onChange={toggleSubCategory}
                  />
                  BottomWear
                </label>
                <label className="flex items-center space-x-2 cursor-pointer gap-2">
                  <input 
                    className="w-3" 
                    type="checkbox" 
                    value="Winterwear" 
                    name="Winterwear" 
                    onChange={toggleSubCategory}
                  />
                  WinterWear
                </label>
              </div>
          </div>
        </div>

      {/* Right Side */}
      <div className='flex-1'> 
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={"All"} text2={"Collections"}/>
            {/* Product Sort */}
            <select className='border-2 border-gray-400 text-sm px-2' onChange={(e)=>handleSorted(e)}>
              <option value="Relative" >Sort by : Relavent</option>
              <option value="LowToHigh">Sort by : Low To High</option>
              <option value="HighToLow" >Sort by : High To Low</option>
            </select>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                { filterProduct.map((item,index)=>{return <ShowProduct key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>})}
            </div>
      </div>
    </div>
  )
}

export default Collection
