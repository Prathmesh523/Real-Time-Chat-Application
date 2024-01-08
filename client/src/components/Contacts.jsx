import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header.jsx'

export default function Contacts({currentUser, setCurrentUser, selectedUser, setSelectedUser}) {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const display = async () => {
      const token = localStorage.getItem("token")
      const details = await axios.post("http://localhost:5000/chat/allContacts", { token })
      setCurrentUser(details.data.username)
      setContacts(details.data.others)
    }
    display()
  }, [])

  const handleChange=(index)=>{
    setSelectedUser(contacts[index])
  }

  return (
    <div className="contact-container">
      <div className="contact-container-self">{currentUser}</div>
      <div className="contact-container-others">
        <ul className='contact-container-items'>
          {
            contacts.map((contact, index) => {
              return (
                <div className="contact-container-item" onClick={() => { handleChange(index) }} key={index}>
                  <li key={contact}>{contact}</li>
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
