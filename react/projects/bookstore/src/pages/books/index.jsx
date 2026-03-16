import BookForm from "../../components/bookForm"
import BookList from "../../components/bookList"
import Nav from "../../components/nav"

export default function Books() {
  return (
    <section className="appHero">
      <p className="appEyebrow">Personal Library</p>
      <h1>Welcome to Bookstore Dashboard</h1>
      <Nav />
      <BookForm />
      <BookList />
    </section>
  )
}
