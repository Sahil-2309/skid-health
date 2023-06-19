import React from 'react'
import './userlist.css'
import User from './User'

const UserList = ({ users, deleteUser, editUser }) => {
  const handleDeleteUser = (userId) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this user?'
    )
    if (confirmDelete) {
      deleteUser(userId)
    }
  }
  const handleEditUser = (userId) => {
    editUser(userId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='user-list'>
      {users.map((user) => (
        <div className='user-card' key={user.id}>
          <User user={user} />
          <div className='button-group'>
            <button
              className='edit-button'
              onClick={() => handleEditUser(user.id)}
            >
              Edit
            </button>
            <button
              className='delete-button'
              onClick={() => handleDeleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserList
