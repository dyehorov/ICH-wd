import EventsContext from "../../context/eventsContext"
import styles from "./styles.module.css"
import { useContext } from "react"

export default function SeatSelector({ seatList, eventId }) {
  const { getSelectedSeats, handleSeatSelect } = useContext(EventsContext)

  const selectedSeats = getSelectedSeats(seatList)

  return (
    <div>
      <ul className={styles.seatList}>
        {seatList.map(seat => (
          <li
            key={seat.id}
            onClick={() => handleSeatSelect(eventId, seat.id)}
            className={
              seat.isSelected ? styles.selectedSeat : styles.notSelectedSeat
            }
          >
            {seat.label}
          </li>
        ))}
      </ul>
      <p style={{ fontSize: "18px" }}>
        Selected Seats:{" "}
        {selectedSeats.length === 0 ? (
          <span style={{ fontStyle: "italic", fontSize: "16px" }}>
            No seats selected
          </span>
        ) : (
          selectedSeats.map((item, index) => (
            <span key={item}>
              {item}
              {selectedSeats.length === index + 1 ? " " : ", "}
            </span>
          ))
        )}
      </p>
    </div>
  )
}
