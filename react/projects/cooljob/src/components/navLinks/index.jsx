import styles from "./styles.module.css"

export default function NavLinks({ links = [] }) {
  return (
    <nav className={styles.nav}>
      {links.map(({ label, href }, index) => (
        <a key={index} className={styles.link} href={href}>
          {label}
        </a>
      ))}
    </nav>
  )
}
