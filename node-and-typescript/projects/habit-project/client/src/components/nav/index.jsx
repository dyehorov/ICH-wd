import { Link, NavLink } from "react-router-dom"
import styles from "./styles.module.css"

const navMenu = [
  { title: "Dashboard", path: "/" },
  { title: "Habits", path: "/habits" },
  { title: "Analytics", path: "/stats" },
]

export default function Nav() {
  return (
    <nav>
      <ul className={styles.menu}>
        {navMenu.map(menuItem => {
          return (
            <li key={menuItem.title}>
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
