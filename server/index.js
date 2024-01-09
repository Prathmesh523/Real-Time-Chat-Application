import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {dbConnect} from './config/dbConnect.js'
import userRoutes from './routes/userRoutes.js'
import chatRoutes from './routes/chatRoutes.js'
import {Server} from 'socket.io'

dotenv.config()
dbConnect()
const app=express()
const PORT= process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use("/users",userRoutes)
app.use("/chat",chatRoutes)

const server=app.listen(PORT, ()=>{
    console.log(`Server running on PORT: ${PORT}`)
})

const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        credentials:true
    }
})

global.onlineUsers=new Map()

io.on("connection",(socket)=>{
    global.chatSocket=socket
    socket.on("add-user",(userId)=>{
        onlineUsers.set(userId, socket.id)
    })

    socket.on("send-msg",(data)=>{
        const sendUserSocket=onlineUsers.get(data[1])
        console.log(onlineUsers)
        console.log(data[1])
        console.log(sendUserSocket)
        if(sendUserSocket)
        {
            socket.to(sendUserSocket).emit("receive-msg",data[2])
        }
    })
})