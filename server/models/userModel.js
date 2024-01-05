import  Mongoose, {Schema } from "mongoose";

const userSchema= Mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
export default Mongoose.model("users", userSchema)