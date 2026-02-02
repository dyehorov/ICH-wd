import styles from "./styles.module.css"

export default function TeamCard({ name, members }) {
  return (
    <li className={styles.listCard}>
      <h2>{name}</h2>
      <ul>
        {members.map(member => (
          <li key={Math.random()}>{member}</li>
        ))}
      </ul>
    </li>
  )
}
