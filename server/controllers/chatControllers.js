import User from "../models/userModel.js"

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