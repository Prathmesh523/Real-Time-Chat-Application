import mongoose, {Schema} from 'mongoose'

const chatSchema=mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    users:Array,
    sender:{
        type:String,
        required:true
    },
    receiver:{
        type:String,
        required:true
    }
}, {timestamps:true})

export default mongoose.model("chats", chatSchema)