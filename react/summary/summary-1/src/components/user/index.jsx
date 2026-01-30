export default function User({ name = "Guest", age = 25 }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  )
}
