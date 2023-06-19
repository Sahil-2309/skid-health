import React from 'react'
// import '../index.css'
const User = ({ user }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>{user.name}</h2>
        <p className='card-text'>Email: {user.email}</p>
        <p className='card-text'>Phone: {user.phone}</p>
      </div>
    </div>
  )
}

export default User
