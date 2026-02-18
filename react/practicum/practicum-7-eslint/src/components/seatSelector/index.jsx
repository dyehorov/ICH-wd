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

        return { ...seat, selected: seat.selected ? false : true }
      }),
    )
  }

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
      <p>
        Selected Seats:{" "}
        {getSelectedSeats(seats).map(item => (
          <span key={item}>{item + " "}</span>
        ))}
      </p>
    </div>
  )
}
