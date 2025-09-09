import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import userModel from '../models/userModel.js';
const userAuth=async(req,res,next)=>{
    try {
        // console.log(req.headers.cookie);
        const cookies = req.headers.cookie
        ?.split(';')
        .reduce((acc, cookie) => {
          const [key, value] = cookie.trim().split('=');
          acc[key] = value;
          return acc;
        }, {});
  
      const token = cookies?.jwt;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decodedToken.id).select('-password'); // Exclude password from the user object
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Unauthorized' });
    }
}
export default userAuth;