import styles from "./styles.module.css"

const links = [
  {
    id: 1,
    title: "Main",
  },
  {
    id: 2,
    title: "Music",
  },
  {
    id: 3,
    title: "Communities",
  },
  {
    id: 4,
    title: "Friends",
  },
]

export default function Nav() {
  return (
    <nav>
      <ul className={styles.navList}>
        {links.map(link => (
          <li key={link.id}>
            <a href="#">{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
