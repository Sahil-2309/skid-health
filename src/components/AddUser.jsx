import React, { useState } from 'react'
import './AddUser.css'

const AddUser = ({ addUser }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const emptyFields = []
    if (!name) {
      emptyFields.push('Name')
    }
    if (!email) {
      emptyFields.push('Email')
    }
    if (!phone) {
      emptyFields.push('Phone')
    }
    if (emptyFields.length === 0) {
      addUser({ name, email, phone })
      setName('')
      setEmail('')
      setPhone('')
    } else {
      alert(`Please enter the following fields: ${emptyFields.join(', ')}`)
    }
  }

  return (
    <div className='add-form'>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='text'
          placeholder='Phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className='button-container'>
          <button type='submit' className='btn'>
            Add User
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddUser
