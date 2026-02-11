export default function Post({ id, title, userId, body }) {
  return (
    <li>
      <h2>{id}</h2>
      <h3>UserID: {userId}</h3>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  )
}
