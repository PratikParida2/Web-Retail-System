import productModel from "../models/productModel.js";
import {v2 as cloudinary} from 'cloudinary'
const addProduct = async (req, res) => {
    try {
        const { name, description, price, bestSeller, category, subCategory, sizes } =
        req.body;
        const image=req.files.image && req.files.image[0];   
       
        
         
        let imageUrl = await Promise.all([
            (async () => {
                let result = await cloudinary.uploader.upload(image.path, { resource_type: 'image' });
                return result.secure_url;
            })()
        ]);
        const newProduct = new productModel({
        name,
        description,
        price,
        bestSeller,
        category,
        subCategory,
        sizes:JSON.parse(sizes),
        image:imageUrl,
        Date:Date.now(),
        });
        
        await newProduct.save();
        res.status(201).json("Product Created Successfully");

        
    } catch (error) {
        console.log(error);
        
        res.status(500).json(error);
    }
}
const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
}
const deleteProduct = async (req, res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.body.id);
        console.log(product);
        if (!product) {
            res.status(404).json("Product Not Found");
        } else {
            res.status(200).json("Product Deleted Successfully");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}
const singleProduct=async(req,res)=>
{
    try {
        
        const singleData=await productModel.findById(req.body.id);
        res.status(201).json(singleData);
    } catch (error) {
        console.log(error);
        
        res.status(500).json(error);
    }
}
export { addProduct, getAllProducts,singleProduct,deleteProduct }