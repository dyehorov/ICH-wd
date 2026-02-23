import { useState, useEffect } from "react"
import UserContext from "../../context/userContext"

export default function UserProvider({ children }) {
  const [isUserRegistered, setIsUserRegistered] = useState(false)
  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)
  const [email, setEmail] = useState(null)

  function loginUser(data) {
    setLogin(data.login)
    setPassword(data.password)
    setEmail(data.email)
    setIsUserRegistered(true)

    console.log(data)
  }

  function logoutUser() {
    setLogin(null)
    setEmail(null)
    setIsUserRegistered(false)
  }

  return (
    <UserContext.Provider
      value={{ loginUser, logoutUser, login, email, isUserRegistered }}
    >
      {children}
    </UserContext.Provider>
  )
}
