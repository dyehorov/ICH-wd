import styles from "./styles.module.css"

export default function Filter({ filter, setFilter }) {
  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Enter a name..."
        value={filter}
        onChange={event => setFilter(event.target.value)}
      />
    </form>
  )
}
