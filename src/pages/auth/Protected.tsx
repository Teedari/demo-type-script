import React from 'react'

const Login = () => {
  return (<div>
    <h3>You need to login</h3>
    <button>Login</button>  
  </div>)
}

type ProtectedProps = {
  isLoggedIn: boolean,
  component: React.ComponentType<{name: string}>
}

const Protected = ({ isLoggedIn, component: Component}:ProtectedProps) => {
  return isLoggedIn ? <Component name='John Doe' /> : <Login />
}

export default Protected