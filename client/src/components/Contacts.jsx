import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Contacts.css'

export default function Contacts() {
  const [username, setUsername] = useState("")
  const [contacts, setContacts] = useState([])
  const [currentUser, setCurrentUser] = useState(undefined)

  // console.log(typeof(token))
  useEffect(() => {
    const display = async () => {
      const token = localStorage.getItem("token")
      const details = await axios.post("http://localhost:5000/chat/allContacts", { token })
      setUsername(details.data.username)
      setContacts(details.data.others)
    }
    display()
  }, [])
  return (
    <div className="contact-container">
      <div className="contact-container-self">{username}</div>
      <div className="contact-container-others">
        <ul className='contact-container-items'>
          {
            contacts.map((contact) => {
              return <li key={contact} className="contact-container-item">{contact}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}
