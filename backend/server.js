import express from 'express'
import dotend from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import connectDB from './config/Database.js'
import connectCloudinary from './config/Cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cookieParser from 'cookie-parser';
import orderRouter from './routes/orderRoutes.js'


//Configuration
const app=express();
const port=dotend.config().PORT||5000;
app.use(cookieParser());
connectDB();
connectCloudinary();


//middleware
app.use(express.json());
app.use(cors());

//Api Endpoints

app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>
{
    res.send("Server Is Started In Port Number 5000");
});



app.listen(port,()=>
{
    console.log("Server Is Started");
})