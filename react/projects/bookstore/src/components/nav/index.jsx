import { NavLink } from "react-router-dom"
import styles from "./styles.module.css"

const navMenu = [
  { title: "Main", path: "/" },
  { title: "Books", path: "/books" },
  { title: "Readers", path: "/readers" },
]

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul className={styles.list}>
        {navMenu.map(menuItem => {
          return (
            <li key={menuItem.title} className={styles.item}>
              <NavLink
                to={menuItem.path}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                {menuItem.title}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
