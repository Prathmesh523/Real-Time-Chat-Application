import React, { useState } from 'react'

export default function Input({ sendMessage, setSendMessage }) {
  const [message, setMessage]=useState("")
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    setSendMessage(message)
    const inp=document.getElementsByClassName("input-container-field")
    inp.message.value=""
  }

  return (
    <div className='input-container'>
      <form onSubmit={handleSubmit}>
        <input className='input-container-field' type='text' name='message' placeholder='Enter Your Message' onChange={(e) => setMessage(e.target.value)} />
        <button onClick={(e)=>handleSubmit(e)} className='input-container-btn'>Send</button>
      </form>
    </div>
  )
}
