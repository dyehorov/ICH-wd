import styles from "./styles.module.css"
import LatestJobsListItem from "../latestJobsListItem"
import Button from "../button"

export default function LatestJobsList({ latestJobsList }) {
  return (
    <ul className={styles.latestJobsList}>
      {latestJobsList.map(item => (
        <LatestJobsListItem key={item.id} {...item} />
      ))}
    </ul>
  )
}
