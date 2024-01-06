import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
    <div className="contacts">
      <div className="self-item">{username}</div>
      <div className="other-items">
        <ul className='list-items'>
          {
            contacts.map((contact) => {
              return <li key={contact} className="list-item">{contact}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}
