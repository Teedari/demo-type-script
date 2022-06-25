import {useState, createContext } from "react"

export type AuthUserProps = {
  username: string,
  email: string
}

export const UserData = {
  username: 'kodkeyz',
  email: 'kodkeyz@panabios.org'
}

type CreateContextProps = ( {
  user: AuthUserProps | null,
  userOnChange: React.Dispatch<React.SetStateAction<AuthUserProps | null>>
})

export const UserContext = createContext<CreateContextProps| null>(null)



type UserContextProps = {
  children: React.ReactNode
}


const UserContextProvider = ({children}:UserContextProps) => {
  const [user, setUser] = useState<AuthUserProps | null>(null)
  return <UserContext.Provider  value={{user, userOnChange: setUser}}>{children}</UserContext.Provider>
}

export default UserContextProvider