import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

export default function Message({ currentUser, selectedUser, sendMessage, socket }) {
  const scrollRef = useRef()
  const [allMessages, setAllMessages] = useState(undefined)
  const [arrivalMessage, setArrivalMessage] = useState(null)


  useEffect(() => {
    const display = async () => {
      if (currentUser !== undefined && selectedUser !== undefined) {
        const messages = await axios.post("http://localhost:5000/chat/allChats", [currentUser, selectedUser])
        setAllMessages(messages.data.projectMessages)
      }
    }
    display()
  }, [selectedUser])


  useEffect(() => {
    const display = async () => {
      if (sendMessage.length > 0 && currentUser !== undefined && selectedUser !== undefined) {
        socket.current.emit("send-msg", [currentUser, selectedUser, sendMessage])

        const data = await axios.post("http://localhost:5000/chat/postChat", [currentUser, selectedUser, sendMessage])
        const messages = await axios.post("http://localhost:5000/chat/allChats", [currentUser, selectedUser])
        setAllMessages(messages.data.projectMessages)
      }
    }
    display()
  }, [sendMessage])

  useEffect(() => {
    const display = () => {
      console.log(socket.current)
      if (socket.current) {
        socket.current.on("receive-msg", (msg) => {
          console.log(msg)
          setArrivalMessage({ fromSelf: false, message: msg })
        })
      }
    }
    display()
  }, [])

  useEffect(() => {
    arrivalMessage && setAllMessages((prev) => [...prev, arrivalMessage])
  }, [arrivalMessage])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" })
  }, [allMessages])

  if (allMessages !== undefined) {
    return (
      <div className='message-container'>
        <div className="messages">
          {
            allMessages.map((msg) => {
              return (
                <div ref={scrollRef}>
                  <div className={`message ${msg.fromSelf ? "sended" : "received"}`}>
                    <div className="content ">
                      <p>{msg.message}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

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
