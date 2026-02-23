import { useContext } from "react"
import EventsContext from "../../context/eventsContext"
import SeatSelector from "../seatSelector"

export default function EventDetails() {
  const { eventsForSpecificDate } = useContext(EventsContext)

  const events = eventsForSpecificDate?.events ?? []

  console.log(eventsForSpecificDate?.date)

  const day = eventsForSpecificDate?.date.getDate()
  const weekDay = eventsForSpecificDate?.date.get

  console.log(day)

  function renderEvents() {
    return events.map(event => {
      return (
        <div key={event.id}>
          <h1>{event.title}</h1>
          <SeatSelector seatList={event.seats} eventId={event.id} />
        </div>
      )
    })
  }

  return <div>{events && renderEvents()}</div>
}
