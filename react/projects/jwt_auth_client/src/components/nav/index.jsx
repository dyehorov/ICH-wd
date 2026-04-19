import styles from "./styles.module.css";
import { NavLink } from "react-router";

const navMenu = [
  {
    id: "home",
    path: "/",
    title: "Home",
  },
  {
    id: "login",
    path: "/login",
    title: "Login",
  },
  {
    id: "register",
    path: "/register",
    title: "Register",
  },
  {
    id: "profile",
    path: "/profile",
    title: "Profile",
  },
];

function Nav() {
  return (
    <nav className={styles.nav}>
      {navMenu.map((menuItem) => {
        return (
          <NavLink
            key={menuItem.id}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            to={menuItem.path}
          >
            {menuItem.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Nav;
