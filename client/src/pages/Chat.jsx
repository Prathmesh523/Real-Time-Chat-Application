import React, { useState, useEffect } from 'react'
import '../styles/Chat.css'
import Contacts from '../components/Contacts.jsx'
import Header from '../components/Header.jsx'
import Input from '../components/Input.jsx'
import Message from '../components/Message.jsx'
import axios from 'axios'

export default function Chat() {
  const [currentUser, setCurrentUser] = useState(undefined)
  const [selectedUser, setSelectedUser] = useState(undefined)
  const [sendMessage, setSendMessage]=useState("")

  useEffect(()=>{
    const display=async()=>{
      if(sendMessage.length>0 && currentUser!==undefined && selectedUser!==undefined)
      {
        const data=await axios.post("http://localhost:5000/chat/postChat", [ currentUser, selectedUser, sendMessage ])
      }
    }
    display()
  },[sendMessage])

  return (
    <div className='container'>
      <Contacts currentUser={currentUser} setCurrentUser={setCurrentUser} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />

      <div className="right-container">
        <Header selectedUser={selectedUser} />
        <Message currentUser={currentUser} selectedUser={selectedUser} sendMessage={sendMessage} />
        <Input sendMessage={sendMessage} setSendMessage={setSendMessage} />
      </div>

    </div>
  )
}
