import { useContext } from "react"
import RegistrationForm from "../registrationForm"
import UserProfile from "../userProfile"
import UserContext from "../../context/userContext"
import styles from "./styles.module.css"

export default function MainComponent() {
  const { isUserRegistered } = useContext(UserContext)

  return (
    <div className={styles.mainContainer}>
      {isUserRegistered ? <UserProfile /> : <RegistrationForm />}
    </div>
  )
}
