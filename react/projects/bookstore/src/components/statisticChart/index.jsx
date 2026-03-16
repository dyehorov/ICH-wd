import { PieChart } from "@mui/x-charts/PieChart"
import { connect } from "react-redux"

function BasicPie({ books }) {
  const availableBooksCount = books.filter(book => book.isAvailable).length
  const borrowedBooksCount = books.length - availableBooksCount

  return (
    <PieChart
      series={[
        {
          data: [
            {
              id: 0,
              value: books.length,
              label: `Total books: ${books.length}`,
            },
            {
              id: 1,
              value: availableBooksCount,
              label: `Available books: ${availableBooksCount} `,
            },
            {
              id: 2,
              value: borrowedBooksCount,
              label: `Borowed books: ${borrowedBooksCount}`,
            },
          ],
        },
      ]}
      width={200}
      height={200}
    />
  )
}

const mapStateToProps = state => {
  return {
    books: state.books,
    readers: state.readers,
  }
}

export default connect(mapStateToProps)(BasicPie)
