import Book from "../Book"

export default function BookShelf({ bookList, title = "All Books" }) {
  return (
    <div>
      <h2>{title}</h2>
      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        {bookList.map(book => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            year={book.year}
            isAvailable={book.isAvailable}
          />
        ))}
      </div>
    </div>
  )
}
