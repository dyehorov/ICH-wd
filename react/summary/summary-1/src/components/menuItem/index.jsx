export default function MenuItem({ name, description, price }) {
  return (
    <li>
      {name} - {description} - {price}
    </li>
  )
}
