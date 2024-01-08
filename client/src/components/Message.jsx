import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Message({ currentUser, selectedUser, sendMessage }) {
  const [allMessages, setAllMessages] = useState(undefined)

  useEffect(()=>{
    const display=async()=>{
      if(sendMessage.length>0 && currentUser!==undefined && selectedUser!==undefined)
      {
        const data=await axios.post("http://localhost:5000/chat/postChat", [ currentUser, selectedUser, sendMessage ])
        const messages = await axios.post("http://localhost:5000/chat/allChats", [currentUser, selectedUser])
        setAllMessages(messages.data.projectMessages)
      }
    }
    display()
  },[sendMessage])

  useEffect(() => {
    const display = async () => {
      if (currentUser !== undefined && selectedUser !== undefined) {
        const messages = await axios.post("http://localhost:5000/chat/allChats", [currentUser, selectedUser])
        setAllMessages(messages.data.projectMessages)
      }
    }
    display()
  }, [selectedUser])

  
  if (allMessages !== undefined) {
    return (
      <div className='message-container'>
        <ul className="message-container-items">
          {
            allMessages.map((msg, index) => {
              return <li key={index}>{msg.message}</li>
            })
          }
        </ul>

      </div>
    )
  }
  else {
    return (
      <div className='message-container'>

      </div>
    )
  }
}
