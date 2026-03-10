import { NavLink } from "react-router-dom"
import styles from "./styles.module.css"

const navMenu = [
  { title: "Home", path: "/" },
  { title: "Users", path: "/users" },
]

export default function Nav() {
  return (
    <nav>
      <ul>
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
