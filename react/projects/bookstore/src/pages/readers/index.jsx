import { connect } from "react-redux"
import Nav from "../../components/nav"
import ReaderForm from "../../components/readerForm"
import ReaderList from "../../components/readerList"

function Readers({ books, readers }) {
  const availableBooksCount = books.filter(book => book.isAvailable).length
  const borrowedBooksCount = books.length - availableBooksCount

  return (
    <section className="appHero">
      <p className="appEyebrow">Personal Library</p>
      <h1>Welcome to Bookstore Dashboard</h1>
      <Nav />
      <ReaderForm />
      <ReaderList />
    </section>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books,
    readers: state.readers,
  }
}

export default connect(mapStateToProps)(Readers)
