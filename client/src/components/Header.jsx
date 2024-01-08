import React from 'react'

export default function Header({selectedUser}) {
  return (
    <div className='header-container'>
      {selectedUser}
    </div>
  )
}
