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
        const messages=await Chats.find({
            users:{
                $all:[from,to]
            }
        }).sort({updatedAt:1})
        const projectMessages=messages.map((msg)=>{
            return{
                fromSelf:msg.sender===from,
                sender:msg.sender,
                receiver:msg.receiver,
                message:msg.message
            }
        })
        return res.json({status:true, projectMessages})
    } catch (error) {
        console.log(error)
        return res.json({status:false, message:"Some Error Occurred"})
    }
}

export const postChat=async (req,res)=>{
    try {
        const [from,to,message]=req.body
        const data=await Chats.create({
            message,
            users:[from,to],
            sender:from,
            receiver:to
        })
        if(data) return res.json({status:true, message:"Message Sent Successfully"})
        else return res.json({status:false, message:"Failed to Add Message"})
    } catch (error) {
        console.log(error)
        return res.json({status:false, message:"Some Error Occurred"})
    }
}