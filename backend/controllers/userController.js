
import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import validator from 'validator';
import createToken from "../utils/jwtToken.js";
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config();
const loginUser=async(req,res)=>
{
    const {email,password}=req.body;
    //Find In User Model Is This Email Is Existing
    const existingUser=await userModel.findOne({email});
    if(existingUser)
    {
        const isPassword=await bcrypt.compare(password,existingUser.password);
        if(isPassword)
        {
            const token=createToken(res,existingUser._id);
           return  res.status(201).json({message:"Login Succesfully", token});
        }
        else
        {
            res.status(404);
            throw new Error("Invalid Password");
        }
        return ;
    }
    else
    {
        res.status(404).json("User Not Found With This Email Id");
    }
}
const registerUser=async(req,res)=>
{
    try {
        const {name,email,password}=req.body;
        if(!name || !email ||!password )
        {
            return res.status(404).json({message:"Please Fill All The Inputs Yar"});
        }
        const userMail=await userModel.findOne({email});
        if(userMail)
        {
            return res.status(401).json({message:"This Mail Id Already Registered"});
        }
        if(!validator.isEmail(email))
        {
            return  res.status(401).json({message:"Please Enter A Valid Email"});
        }
         if(!validator.isStrongPassword(password) || password.length<8)
        {
            return  res.status(401).json({message:"Please Enter A Strong Password"});
        }
        else
        {
            const salt=await bcrypt.genSalt(10);
            const hashPassword=await bcrypt.hash(password,salt);
            const newUser=new userModel({name,email,password:hashPassword});
            await newUser.save();
            const token=createToken(res,newUser._id);
            return  res.status(201).json({message:"User Created Successfully"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}
const adminLogin=async(req,res)=>
{
    try {
        
        const {email,password}=req.body;
        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD)
        {
            const token=jwt.sign(email+password,process.env.JWT_SECRET);
            res.status(201).json(token);
        }
        else
        {
            res.status(400).json({message:"User Is Not An Admin"});
        }
    } catch (error) {
        console.log(error);
        res.satus(501).json({message:"Internal Server Error"});
    }
}
const logoutUser=async(req,res)=>
{
    try {
        res.cookie("jwt", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            expires: new Date(0), // Expire immediately
          });
          res.json({ message: "Logout successful" });
    } catch (error) {
        console.log(error);
        res.status(501).json({message:"Internal Server Error"});
    }
}
const getAllUsers=async(req,res)=>{
    try {
        const users=await userModel.countDocuments();
        res.status(200).json({users});
    } catch (error) {
        console.log(error);
        res.status(501).json({message:"Internal Server Error"});
    }

}
export {loginUser,registerUser,adminLogin,logoutUser,getAllUsers} 