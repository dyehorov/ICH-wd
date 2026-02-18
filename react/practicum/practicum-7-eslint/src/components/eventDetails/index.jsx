export default function EventDetails({ eventName, eventDate, eventAddress }) {
  return (
    <div>
      <h1>{eventName}</h1>
      <h2>{eventDate}</h2>
      <p>{eventAddress}</p>
    </div>
  )
}
