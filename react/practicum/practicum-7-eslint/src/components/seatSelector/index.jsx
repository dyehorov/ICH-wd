import styles from "./styles.module.css"

export default function SeatSelector({ seats, setSeats }) {
  function getSelectedSeats(seats) {
    return seats.reduce((accum, item) => {
      if (!item.selected) return accum

      accum.push(item.seatNumber)

      return accum
    }, [])
  }

  function handleSeatSelect(id) {
    setSeats(prev =>
      prev.map(seat => {
        if (seat.id !== id) return seat

        return { ...seat, selected: !seat.selected }
      }),
    )
  }

  const selectedSeats = getSelectedSeats(seats)

  return (
    <div>
      <ul className={styles.seatList}>
        {seats.map(seat => (
          <li
            key={seat.id}
            onClick={() => handleSeatSelect(seat.id)}
            className={
              seat.selected ? styles.selectedSeat : styles.notSelectedSeat
            }
          >
            {seat.seatNumber}
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
