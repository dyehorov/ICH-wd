import styles from "./styles.module.css"

export default function ThemeSwitcher({ setTheme, currentTheme }) {
  return (
    <div>
      <span
        id={styles.text}
        className={currentTheme ? styles.textLight : styles.textDark}
      >
        Theme Switcher:
      </span>
      <button
        onClick={() => setTheme(prev => !prev)}
        className={
          currentTheme ? styles.themeSwitcherLight : styles.themeSwitcherDark
        }
        id={styles.themeSwitcher}
      >
        {currentTheme ? "Light" : "Dark"}
      </button>
    </div>
  )
}
