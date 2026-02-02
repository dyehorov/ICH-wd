import styles from "./styles.module.css"
import ThemeSwitcher from "../themeSwitcher"

export default function Header({ setTheme, currentTheme }) {
  return (
    <header
      id={styles.header}
      className={currentTheme ? styles.headerLight : styles.headerDark}
    >
      <h1 className={styles.text}>Title</h1>
      <ThemeSwitcher setTheme={setTheme} currentTheme={currentTheme} />
    </header>
  )
}
