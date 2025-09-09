import userModel from "../models/userModel.js";
const addToCart=async(req,res)=>
{  
    try {
        const {userId,itemId,size}=req.body;
        const userData=await userModel.findById(userId);
        if(!userData)
        {
            return res.status(404).json({message:"User Not Found"});
        }
        const cartItems=await userData.cartData;
        if(cartItems[itemId])
        {
            if(cartItems[itemId][size])
            {
                cartItems[itemId][size]+=1;
            }
            else
            {
                cartItems[itemId][size]=1;
            }
        }
        else
        {
            cartItems[itemId]={};
            cartItems[itemId][size]=1;
        }
        await userModel.findByIdAndUpdate(userId,{cartData:cartItems});
        res.json({success:true,message:"Item Added To Cart"});
    } catch (error) {
        console.log(error);
        res.json({success:true,message:error.message});
    }
}
const getCartItems=async(req,res)=>
{
    try {
        const {userId}=req.body;
        const userData=await userModel.findById(userId);
        if(!userData)
        {
            return res.status(404).json({message:"User Not Found"});
        }
        res.json({success:true,cartData});
    } catch (error) {
        console.log(error);
        res.json({success:true,message:error.message});
    }
}
const updateCartItem=async(req,res)=>
{
    try {
        const {userId,itemId,size,quantity}=req.body;
        const userData=await userModel.findById(userId);
        if(!userData)
        {
            return res.status(404).json({message:"User Not Found"});
        }
        const cartItems=await userData.cartData;
        cartItems[itemId][size]=quantity;
        await userModel.findByIdAndUpdate(userId,{cartData:cartItems});
        res.json({success:true,message:"Cart Item Updated"});
    } catch (error) {
        console.log(error);
        res.json({success:true,message:error.message});
    }
}
export {addToCart,getCartItems,updateCartItem};