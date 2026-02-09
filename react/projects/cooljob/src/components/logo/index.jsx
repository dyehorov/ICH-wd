import styles from "./styles.module.css"
import logo from "../../assets/cooljob.svg"

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Cooljob logo" />
    </div>
  )
}
