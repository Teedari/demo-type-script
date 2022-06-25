import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const User = () => {
  const context = useContext(UserContext)
  const handleSignIn = () => {
    context?.userOnChange({
      username: 'JohnDoe',
      email: 'john@doe.org'
    })
  }
  const handleLogout = () => {
    context?.userOnChange(null)
  }
  return (
    <div style={{padding: '2rem'}}>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleLogout}>Logout</button>
      {context?.user && 
      <div>
        <p>
          Username is <small>{context?.user?.username}</small>
        </p>
        <p>
          User email is <small>{context?.user?.email}</small>
        </p>
      </div> }
    </div>
  )
}

export default User