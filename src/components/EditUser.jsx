import React, { useState } from 'react'
import './EditUser.css'

const EditUser = ({ user, updateUser, closeModal }) => {
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')
  const [phone, setPhone] = useState(user?.phone || '')
  const [updateStatus, setUpdateStatus] = useState('') // New state for update status

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email && phone) {
      const confirmUpdate = window.confirm(
        'Are you sure you want to update the user?'
      )
      if (confirmUpdate) {
        updateUser({ ...user, name, email, phone })
        closeModal()
        setUpdateStatus('User data updated successfully') // Set the update status message
      }
    } else {
      alert('Please fill in all fields')
    }
  }

  return (
    <div className='edit-form'>
      <h2>Edit User</h2>
      {updateStatus && <p>{updateStatus}</p>}{' '}
      {/* Render the update status message if available */}
      <form onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='Phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <div className='button-container'>
          <button type='submit' className='btn'>
            Update User
          </button>
          <button type='button' className='btn' onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditUser
