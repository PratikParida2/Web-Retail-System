import express from 'express'
import { addProduct, getAllProducts,singleProduct,deleteProduct } from '../controllers/productController.js'
import upload from '../middlewares/multer.js';
import adminAuth from '../middlewares/adminAuth.js';
const productRouter=express.Router();
productRouter.post('/add',upload.fields([{name:"image",maxCount:1}]),addProduct);
productRouter.post('/remove',deleteProduct);
productRouter.post('/single',singleProduct);
productRouter.get('/get',getAllProducts);

export default productRouter;