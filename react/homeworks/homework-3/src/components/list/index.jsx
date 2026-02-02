import { useState } from "react"
import styles from "./styles.module.css"

export default function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Bob", age: 20 },
    { id: 2, name: "Nancy", age: 22 },
    { id: 3, name: "Carl", age: 21 },
    { id: 4, name: "Tom", age: 19 },
    { id: 5, name: "Marco", age: 23 },
    { id: 6, name: "Michaela", age: 24 },
    { id: 7, name: "Steve", age: 18 },
    { id: 8, name: "Mathew", age: 20 },
    { id: 9, name: "John", age: 21 },
  ])
  return (
    <ul className={styles.peopleList}>
      {people.length === 0 && <p>The list is empty</p>}
      {people.map(person => (
        <li key={person.id} className={styles.peopleListItem}>
          <p>
            Name: {person.name}, age: {person.age}
          </p>

          <button
            onClick={() =>
              setPeople(prev => prev.filter(item => item.id !== person.id))
            }
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}
