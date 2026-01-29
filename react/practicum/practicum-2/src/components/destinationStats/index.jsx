export default function DestinationStats({ stats }) {
  return (
    <ul>
      <li>{stats.popularity}</li>
      <li>{stats.accessibility}</li>
      <li>{stats.climate}</li>
      <li>{stats.timeofday}</li>
    </ul>
  )
}
