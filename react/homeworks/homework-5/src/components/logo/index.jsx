import logo from "../../assets/spotify.svg"
import styles from "./styles.module.css"

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="Spotify logo" />
    </div>
  )
}
