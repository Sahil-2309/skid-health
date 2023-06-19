import React, { useState } from 'react'
import AddUser from './AddUser'
import UserList from './UserList'
import EditUser from './EditUser'
import './Card.css'
import '../index.css'

const Card = () => {
  const [users, setUsers] = useState([])
  const [editUserId, setEditUserId] = useState(null)

  const addUser = (user) => {
    setUsers([...users, { ...user, id: new Date().getTime() }])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const editUser = (id) => {
    setEditUserId(id)
  }

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    )
    setEditUserId(null)
  }

  const closeModal = () => {
    setEditUserId(null)
  }

  return (
    <div className='card-container'>
      <h1>User Management</h1>
      <div className='top-right'>
        {editUserId !== null && (
          <div className='alert'>
            <EditUser
              user={users.find((user) => user.id === editUserId)}
              updateUser={updateUser}
              closeModal={closeModal}
            />
          </div>
        )}
        <AddUser addUser={addUser} />
      </div>
      {users.length > 0 ? (
        <UserList
          users={users}
          deleteUser={deleteUser}
          editUser={editUser}
          editUserId={editUserId}
        />
      ) : (
        <p>No users to display.</p>
      )}
    </div>
  )
}

export default Card
