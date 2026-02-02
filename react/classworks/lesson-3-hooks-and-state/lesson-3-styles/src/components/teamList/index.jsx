import TeamCard from "../teamCard"
import styles from "./styles.module.css"

export default function TeamList({ teamsList }) {
  return (
    <ul className={styles.teamList}>
      {teamsList.map(team => (
        <TeamCard key={Math.random()} name={team.name} members={team.members} />
      ))}
    </ul>
  )
}
