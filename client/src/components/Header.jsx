import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header({ selectedUser }) {
  const navigate = useNavigate()

  const handleClick = async (e) => {
    localStorage.clear()
    navigate("/login")
  }
  return (
    <div className='header-container'>
      <div className="header-name">{selectedUser}</div>
      <button className="header-logout" onClick={handleClick}>Logout</button>
    </div>
  )
}
