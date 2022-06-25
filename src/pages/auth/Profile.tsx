import React from 'react'

const Profile = (props: {name: string}) => {
  return (
    <div>Welcome, <strong>{props.name}</strong></div>
  )
}

export default Profile