import User from "../models/userModel.js"
import bcrypt from 'bcrypt'

export const userRegister=async(req,res)=>{
    try {
        const [username, email, password]=req.body;

        if(!username || !email ||!password)
        {
            return res.json({status:false, message:"Every field is mandatory"})
        }
        const userCheck=await User.findOne({username, email})
        if(userCheck)
        {
            return res.json({status:false, message:"User already Registered"})
        }
        const hashedPassword=await bcrypt.hash(password, 10)
        const user=await User.create({
            username,
            email,
            password:hashedPassword
        })
        if(user)
        {
            return res.json({status:true, message:"User Registered Successfully"})
        }
        else
        {
            return res.json({status:false, message:"Some Error Occurred"})
        }
    } catch (error) {
        console.log(error)
        return res.json({status:false, message:"Some Error Occurred"})
    }
}

export const userLogin=async(req,res)=>{
    try {
        console.log(req.body)
        const [username,password]=req.body
        if(!username ||!password)
        {
            return res.json({status:false, message:"Every field is mandatory"})
        }
        const userCheck=await User.findOne({username})
        if(userCheck)
        {
            const valid=await bcrypt.compare(password,userCheck.password) 
            if(valid)
            {
                return res.json({status:true, message:"User Logged In Successfully"})
            }
            else
            {
                return res.json({status:false, message:"Incorrect Password"})
            }
        }
        else
        {
            return res.json({status:false, message:"User Not Registered"})
        }
    } catch (error) {
        console.log(error)
        return res.json({status:false, message:"Some Error Occurred"})
    }
}

