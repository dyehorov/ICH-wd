import { useContext } from "react"
import EventsContext from "../../context/eventsContext"

export default function DateSelector() {
  const { events, setDate } = useContext(EventsContext)
  const dates = [...events].map(item =>
    item.date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  )

  return (
    <form>
      <select
        name="date"
        id="date"
        onChange={event => setDate(event.target.value)}
      >
        <option value="#">Choose the date</option>
        {dates &&
          dates.map(date => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
      </select>
    </form>
  )
}
