import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();
const connectCloudinary= async()=>{
    cloudinary.config({
        cloud_name: process.env.Cloudinary_Name,
        api_key: process.env.Cloudinary_Api_Key,
        api_secret: process.env.Cloudinary_Secret,
    })
}
export default connectCloudinary;