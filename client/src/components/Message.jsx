import React, {useState, useEffect} from 'react' 
import axios from 'axios'

export default function Message({currentUser, selectedUser, sendMessage}) {

  useEffect(()=>{
    const display=async()=>{
      if(currentUser!==undefined && selectedUser!==undefined)
      {
        const messages=await axios.post("http://localhost:5000/chat/allChats", [ currentUser, selectedUser ])
      }
    }
    display()
  },[selectedUser])
  
  return (
    <div className='message-container'>

    </div>
  )
}
