import { useState } from "react"

export default function Title() {
  const [title, setTitle] = useState("Initial text")

  function changeOldTitleToNew(newTitle) {
    if (newTitle.length === 0) {
      setTitle("Initial text")
    } else {
      setTitle(newTitle)
    }
  }

  return (
    <div>
      <h1>{title}</h1>
      <form>
        <input
          type="text"
          name="newTitle"
          id="newTitle"
          onChange={event => changeOldTitleToNew(event.target.value)}
        />
      </form>
    </div>
  )
}
