import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const createToken = (res,id) => {
    const token= jwt.sign({ id }, process.env.JWT_SECRET);
        //Set Jwt As An Http-ony Cookies
        res.cookie("jwt", token, {
            httpOnly: true, // Prevents client-side access to the cookie
            secure: process.env.NODE_ENV === "production", // Secure in production (HTTPS)
            sameSite: "Strict", // Prevent CSRF attacks
            maxAge: 30 *24 * 60 * 60 * 1000, // 30 Days Expiry
          });
          return token;
}
export default createToken;