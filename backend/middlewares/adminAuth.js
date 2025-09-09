import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const adminAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
          }
          const token = authHeader.split(' ')[1];
        console.log(token);
        // console.log(req.cookies);        
        if(!token)
        {
            return res.status(401).json({ message: 'Unauthorized' })
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        if(decodedToken!=process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD)
        {
            return res.status(401).json({ message: 'Unauthorized' })
        } 
        next()
    } catch (error) {
        console.log(error);
        
        res.status(401).json({ message: 'Unauthorized' })
    }
}
export default adminAuth