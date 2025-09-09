import express from 'express'
import { addToCart,getCartItems,updateCartItem } from '../controllers/cartController.js'
import userAuth from '../middlewares/userAuth.js';
const cartRouter=express.Router()
cartRouter.post('/add',userAuth,addToCart);
cartRouter.get('/get',userAuth,getCartItems);
cartRouter.post('/update',userAuth,updateCartItem);
export default cartRouter;