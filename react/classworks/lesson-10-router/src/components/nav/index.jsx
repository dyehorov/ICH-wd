import { Link, NavLink } from "react-router-dom"
import styles from "./styles.module.css"

const navMenu = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contacts", path: "/contacts" },
]

// export default function Nav() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink
//             to={"/"}
//             style={({ isActive }) => ({
//               color: isActive ? "red" : "blue",
//             })}
//           >
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to={"/about"}
//             style={({ isActive }) => ({
//               color: isActive ? "red" : "blue",
//             })}
//           >
//             About
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to={"/contacts"}
//             style={({ isActive }) => ({
//               color: isActive ? "red" : "blue",
//             })}
//           >
//             Contacts
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   )
// }

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
