import { useState } from "react"
import EventDetails from "../eventDetails"
import SeatSelector from "../seatSelector"
import styles from "./styles.module.css"

export default function EventBooking() {
  const [seats, setSeats] = useState([
    { id: 1, seatNumber: "1A", selected: false },
    { id: 2, seatNumber: "1B", selected: false },
    { id: 3, seatNumber: "1C", selected: false },
    { id: 4, seatNumber: "1D", selected: false },
    { id: 5, seatNumber: "1E", selected: false },
    { id: 6, seatNumber: "1F", selected: false },
    { id: 7, seatNumber: "1G", selected: false },
  ])

  return (
    <div className={styles.container}>
      <EventDetails
        eventName={"AC/DC"}
        eventDate={"Thu, Feb 19 2026"}
        eventAddress={"O2 Arena · London, United Kingdom"}
      />
      <SeatSelector seats={seats} setSeats={setSeats} />
    </div>
  )
}
