import styles from "./styles.module.css"
import { useState, useEffect } from "react"
import axios from "axios"

const BASE_URL = "https://randomuser.me/api/0.8"

export default function UserProfile() {
  const [user, setUser] = useState([])
  const [isLoaded, setIsLoaded] = useState(null)

  const fetchUser = async () => {
    setIsLoaded(false)
    const response = await axios.get(BASE_URL)

    setUser(response.data.results)
    setIsLoaded(true)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  if (!isLoaded)
    return <p style={{ textAlign: "center", marginTop: "20vh" }}>Loading...</p>

  return (
    <>
      {user &&
        user.map(item => {
          return (
            <div key={item} className={styles.userCard}>
              <div>
                <img
                  src={item.user.picture.large}
                  alt={`${item.user.name.first + ` ` + item.user.name.last} photo`}
                  style={{ borderRadius: "999px" }}
                />
              </div>
              <h2 style={{ textTransform: "capitalize" }}>
                {item.user.name.first + " " + item.user.name.last}
              </h2>
              <p>{item.user.email}</p>
              <p>Phone: {item.user.phone}</p>
              <div>
                <button
                  className={styles.loadUserButton}
                  onClick={() => fetchUser()}
                >
                  Load New User
                </button>
              </div>
            </div>
          )
        })}
    </>
  )
}
