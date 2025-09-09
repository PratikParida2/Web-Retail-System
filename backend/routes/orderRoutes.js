import express from 'express';
import adminAuth from '../middlewares/adminAuth.js';
import userAuth from '../middlewares/userAuth.js';
const orderRouter=express.Router();
import {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus} from '../controllers/orderController.js';
//Admin 
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus);

//payment
orderRouter.post('/place',userAuth,placeOrder);
orderRouter.post('/stripe',userAuth,placeOrderStripe);
orderRouter.post('/razorpay',userAuth,placeOrderRazorpay);
//user orders
orderRouter.post('/userorders',userAuth,userOrders);
export default orderRouter;