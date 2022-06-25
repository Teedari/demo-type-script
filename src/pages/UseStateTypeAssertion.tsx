import React , {useState} from 'react'
type AuthUser = {
  username: string,
  email: string
}
const UseStateTypeAssertion = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser)
  const accountHandler = () => {
    if(user){
      setUser({} as AuthUser)
    }else{
      setUser({
        username: 'John Doe',
        email: 'johndoe@test.com'
      })
    }
  }
  return (
    <div>
      <h2>Future Value useState</h2>
      <p>Username: <small>{user?.username}</small></p>
      <p>Email: <small>{user?.email}</small></p>
      <button onClick={accountHandler}>{ user ? 'logout': 'sign in'}</button>
    </div>
  )
}

export default UseStateTypeAssertion