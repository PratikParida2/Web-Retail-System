import express from 'express'
import { registerUser, loginUser,adminLogin ,logoutUser,getAllUsers} from '../controllers/userController.js'
import adminAuth from '../middlewares/adminAuth.js'
import userAuth from '../middlewares/userAuth.js';
const userRouter=express.Router();
userRouter.post('/login',loginUser);
userRouter.post('/register',registerUser);
userRouter.post('/admin',adminLogin);
userRouter.post('/logout',logoutUser);
userRouter.get('/getusers',adminAuth,getAllUsers);
export default userRouter;
// This code defines a router for handling user-related routes in an Express application. It imports the necessary modules, including Express and the user controller functions. The router is then set up to handle POST requests to three different endpoints: '/login', '/register', and '/admin'. Each endpoint is associated with a specific controller function that will handle the request and response logic for that route. Finally, the router is exported for use in other parts of the application.