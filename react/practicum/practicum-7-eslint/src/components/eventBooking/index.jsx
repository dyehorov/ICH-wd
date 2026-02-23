import EventDetails from "../eventDetails"
import DateSelector from "../dateSelector"
import styles from "./styles.module.css"

export default function EventBooking() {
  return (
    <div className={styles.container}>
      <DateSelector />
      <EventDetails />
    </div>
  )
}
