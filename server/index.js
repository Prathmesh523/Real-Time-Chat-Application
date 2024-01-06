import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {dbConnect} from './config/dbConnect.js'
import userRoutes from './routes/userRoutes.js'
import chatRoutes from './routes/chatRoutes.js'

dotenv.config()
dbConnect()
const app=express()
const PORT= process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use("/users",userRoutes)
app.use("/chat",chatRoutes)

app.listen(PORT, ()=>{
    console.log(`Server running on PORT: ${PORT}`)
})