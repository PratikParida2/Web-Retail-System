import mongoose from 'mongoose'
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true, 
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    cartData:{
        type:Object,
        default:{},
    }
    
},{minimize:false},{timestamps:true})//minimize: false in a schema ensures that empty objects ({}) are stored in the database instead of being removed.
// timestamps: true automatically adds createdAt and updatedAt fields to the schema, which are useful for tracking when documents are created and modified.
// The minimize option is useful when you want to ensure that empty objects are stored in the database, while the timestamps option is useful for tracking the creation and modification times of documents.
const userModel=mongoose.connection.model('userModel',userSchema);
// Represents the "users" collection in MongoDB and allows operations on it.
// The userModel variable is an instance of the Mongoose model for the user schema, which allows you to perform CRUD operations on the "users" collection in MongoDB.
export default userModel