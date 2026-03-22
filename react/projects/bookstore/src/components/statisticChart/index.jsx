import { PieChart } from "@mui/x-charts/PieChart"
import { connect } from "react-redux"
import styles from "./styles.module.css"

function BasicPie({ statistics }) {
  const { totalBooks, availableBooks, borrowedBooks, booksByDecade } = statistics
  const decades = Object.entries(booksByDecade).sort(
    ([firstDecade], [secondDecade]) => Number(firstDecade) - Number(secondDecade),
  )

  return (
    <div className={styles.statisticsWrap}>
      <PieChart
        series={[
          {
            data: [
              {
                id: 0,
                value: totalBooks,
                label: `Total books: ${totalBooks}`,
              },
              {
                id: 1,
                value: availableBooks,
                label: `Available books: ${availableBooks} `,
              },
              {
                id: 2,
                value: borrowedBooks,
                label: `Borowed books: ${borrowedBooks}`,
              },
            ],
          },
        ]}
        width={200}
        height={200}
      />

      <div className={styles.decadesBlock}>
        <h3>Books by decade</h3>
        {decades.length === 0 ? (
          <p>No statistics yet</p>
        ) : (
          <ul className={styles.decadesList}>
            {decades.map(([decade, count]) => (
              <li key={decade} className={styles.decadeItem}>
                <span>{decade}s</span>
                <strong>{count}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books,
    statistics: state.statistics,
  }
}

export default connect(mapStateToProps)(BasicPie)
