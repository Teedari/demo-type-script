
import User from './User'
import UserContextProvider from './UserContext'

const UserApp = () => {

  return (
    <UserContextProvider>
      <User />
    </UserContextProvider>
  )
}

export default UserApp