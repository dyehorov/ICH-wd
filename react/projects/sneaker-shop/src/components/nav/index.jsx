import { NavLink } from "react-router-dom"
import styles from "./styles.module.css"

const links = [
  { id: 1, title: "Main", path: "/" },
  { id: 2, title: "Cart", path: "/cart" },
  { id: 3, title: "Contacts", path: "/contacts" },
]

export default function Nav() {
  return (
    <nav>
      <ul className={styles.linksList}>
        {links.map(link => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
