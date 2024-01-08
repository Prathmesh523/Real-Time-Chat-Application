import User from "../models/userModel.js"
import Chats from "../models/chatModel.js"

export const allContacts=async (req,res)=>{
    try {
        const [username,password]=req.body
        const contacts=await User.find()
        const others=[]
        const items=contacts.map((contact)=>{
            if(contact.username===username)
            {
            }
            else
            {
                others.push(contact.username)
            }
        })
        return res.json({status:true, others, username})
    } catch (error) {
        console.log(error)
        return res.json({status:false, message:"Some Error Occurred"})
    }
}

export const allChats=async (req,res)=>{
    try {
        const [from,to]=req.body
        const messages=await Chats.find({from,to}).sort(updatedAt)
        console.log(messages)
        return res.json({status:true, messages})
    } catch (error) {
        console.log(error)
        return res.json({status:false, message:"Some Error Occurred"})
    }
}

export const postChat=async (req,res)=>{
    try {
        const [from,to,message]=req.body
        const data=await Chats.create({from,to,message})
        return res.json({status:true, message:"Message Sent Successfully"})
    } catch (error) {
        console.log(error)
        return res.json({status:false, message:"Some Error Occurred"})
    }
}