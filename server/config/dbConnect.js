import mongoose from 'mongoose'

export const dbConnect=async()=>{
    try {
        const connect=await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
}