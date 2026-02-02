import styles from "./styles.module.css"

export default function Footer({ currentTheme }) {
  return (
    <footer
      id={styles.footer}
      className={currentTheme ? styles.footerLight : styles.footerDark}
    >
      <p className={styles.text}>CopyRight</p>
      <p className={styles.text}>Links</p>
    </footer>
  )
}
