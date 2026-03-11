import { useLocation } from "react-router-dom"

export default function Contacts() {
  // const location = useLocation()

  const {
    state: { name, age },
  } = useLocation()

  return (
    <div>
      <h1>Contacts Page</h1>
      <p>Welcome to the contacts page</p>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}
