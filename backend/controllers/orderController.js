import orderModel from "../models/orderModel.js";
const placeOrder=async(req,res)=>
{
    try {
        const {userId,item,amount,address}=req.body;
        const orderData={
            userId,
            item,
            amount,
            address,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()
        }
        const order=new orderModel(orderData);
        await order.save();
        res.status(200).json({success:true,message:"Order Placed Successfully"});
        const data=localStorage.getItem('cartItems');
        data=data.filter((item)=>item._id!==id);
        localStorage.setItem('cartItems',JSON.stringify(data));
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Internal Server Error"});
    }
}
const placeOrderStripe=async(req,res)=>{
}
const placeOrderRazorpay=async(req,res)=>{}
const allOrders=async(req,res)=>{}
//for frontend
const userOrders=async(req,res)=>{}
//for admin panel
const updateStatus=async(req,res)=>{}
export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus}