import mongoose, {Schema} from 'mongoose'

const chatSchema=mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    from:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
    to:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    }
}, {timestamps:true})

export default mongoose.model("chats", chatSchema)