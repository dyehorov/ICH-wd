import styles from "./styles.module.css"

export default function SectionTitle({ title }) {
  return <h2 className={styles.title}>{title}</h2>
}
