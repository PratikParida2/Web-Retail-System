import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import axios from 'axios'
export const ShopContext=createContext();
const ShopContextProvider=(props)=>
{
    const [products, setProducts] = useState([]);
    const backend_url=import.meta.env.VITE_BACKEND_URL;
    const navigate=useNavigate();
    const currency='₹';
    const deliveryCharge=10;
    const [token,setToken]=useState(null);
    const[showSearch,setShowSearch]=useState(false);
    const[search,setSearch]=useState('');
    const [cartItem, setCartItem] = useState(() => {
        const savedCart = localStorage.getItem("CartItemsData");
        return savedCart ? JSON.parse(savedCart) : {};
      });
    const upDateCartItem=(itemId,size,quantity)=>
    {
        let cartData=structuredClone(cartItem);
        cartData[itemId][size]=quantity;
        console.log("quantity in up to date : "+quantity);
        setCartItem(cartData);
        localStorage.setItem('CartItemsData',JSON.stringify(cartItem));
    }    
    const addToCart=async(itemId,size)=>
    {
        if(!size)
        {
            toast.error("Please Select Size");
            return;
        }
       let cartData=structuredClone(cartItem);
       if(cartData[itemId])
       {
            if(cartData[itemId][size])
            {
                cartData[itemId][size]=cartData[itemId][size]+1;
            }
            else
            {
                cartData[itemId][size]=1;
            }
       }
       else
       {
         cartData[itemId]={};
         cartData[itemId][size]=1;
       }
       setCartItem(cartData);
    }
    const getCartCount=()=>
        {
            let total=0;
            for(const items in cartItem)
            {
                for(const item in cartItem[items])
                {
                    if(cartItem[items][item]>0)
                    total=total+cartItem[items][item];
                }
            }
            return total;
        }
    const getCartAmount=()=>
    {
        let total=0;
        for(const items in cartItem)
        {
            console.log("items "+items);
            
            let productInfo = products.find((product) => product._id === items);
            console.log(productInfo);
            if (!productInfo) continue; // 🔐 Prevents the error
            for(const item in cartItem[items])
            {
                if(cartItem[items][item]>0)
                {
                    total=total+(cartItem[items][item]*productInfo.price);
                }
            }

        }
        return total;
    }
    const fetchProducts=async()=>{
        
        
        try {     
                const response=await axios.get(backend_url+'/api/product/get');
               
                setProducts(response.data);
                console.log("product array after response "+products);
               
                
                
            } 
            catch (error) 
            {
                // console.log(error);
                toast.error("Error in fetching products");
            }
    }

    useEffect(()=>{
        localStorage.setItem("CartItemsData",JSON.stringify(cartItem));
    },[cartItem])
    useEffect(()=>{
        fetchProducts();
    },[]);
    useEffect(()=>{
        const token=localStorage.getItem('token');
        if(token)
        {
            setToken(token);
        }
    },[])

    const value={
        products,currency,deliveryCharge,showSearch,setShowSearch,search,setSearch,cartItem,addToCart,getCartCount,upDateCartItem,getCartAmount,navigate,backend_url,token,setToken,
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
} 
export default ShopContextProvider;