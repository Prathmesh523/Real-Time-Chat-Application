import React, { useState, useEffect, useRef } from 'react'
import '../styles/Chat.css'
import Contacts from '../components/Contacts.jsx'
import Header from '../components/Header.jsx'
import Input from '../components/Input.jsx'
import Message from '../components/Message.jsx'
import {io} from 'socket.io-client'

export default function Chat() {
  const socket=useRef()
  const [currentUser, setCurrentUser] = useState(undefined)
  const [selectedUser, setSelectedUser] = useState(undefined)
  const [sendMessage, setSendMessage]=useState("")


  useEffect(()=>{
    const display=()=>{
      if(currentUser)
      {
        socket.current=io("http://localhost:5000")
        socket.current.emit("add-user", currentUser)
      }
    }
    display()
  },[currentUser])

  return (
    <div className='container'>
      <Contacts currentUser={currentUser} setCurrentUser={setCurrentUser} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />

      <div className="right-container">
        <Header selectedUser={selectedUser} />
        <Message currentUser={currentUser} selectedUser={selectedUser} sendMessage={sendMessage} socket={socket} />
        <Input sendMessage={sendMessage} setSendMessage={setSendMessage} />
      </div>

    </div>
  )
}
