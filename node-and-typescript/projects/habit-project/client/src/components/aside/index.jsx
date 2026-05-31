import styles from "./styles.module.css"
import Nav from "../nav"

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <h2 className={styles.logo}>Habit Tracker</h2>
      <Nav />
      <div className={styles.bottomAside}>
        <div className={styles.user}>
          <div className={styles.userImage}>
            <img src="" alt="user image" />
          </div>
          <p>Name Lastname</p>
        </div>
        <div className={styles.logout}>
          <div className={styles.logoutIcon}>
            <img src="" alt="logout icon" />
          </div>
          <p>Logout</p>
        </div>
      </div>
    </aside>
  )
}
