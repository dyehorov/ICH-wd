import { useContext } from "react"
import DataContext from "../../context/dataContext"

export default function Posts() {
  const data = useContext(DataContext)

  return (
    <ul>
      {data ? (
        data.map(item => <li key={Math.random()}>{item.title}</li>)
      ) : (
        <span>Loading...</span>
      )}
    </ul>
  )
}
