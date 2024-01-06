import React from 'react'
import Contacts from '../components/Contacts.jsx'
import Header from '../components/Header.jsx'
import Input from '../components/Input.jsx'
import Message from '../components/Message.jsx'

export default function Chat() {
  return (
    <div>
      <Contacts/>
      <Header/>
      <Message/>
      <Input/>
    </div>
  )
}
