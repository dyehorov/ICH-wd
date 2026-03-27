const defaultBooks = [
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    isAvailable: false,
  },
  {
    id: 2,
    title: "Foundation",
    author: "Isaac Asimov",
    year: 1951,
    isAvailable: true,
  },
  {
    id: 3,
    title: "Neuromancer",
    author: "William Gibson",
    year: 1984,
    isAvailable: true,
  },
  {
    id: 4,
    title: "I, Robot",
    author: "Isaac Asimov",
    year: 1950,
    isAvailable: true,
  },
  {
    id: 5,
    title: "The Caves of Steel",
    author: "Isaac Asimov",
    year: 1953,
    isAvailable: true,
  },
  {
    id: 6,
    title: "Children of Dune",
    author: "Frank Herbert",
    year: 1976,
    isAvailable: false,
  },
]

const defaultReaders = [
  {
    id: 101,
    name: "Alice Johnson",
    email: "alice@example.com",
    borrowedBooks: [1],
  },
  {
    id: 102,
    name: "Bob Smith",
    email: "bob@example.com",
    borrowedBooks: [6],
  },
  {
    id: 103,
    name: "Carol Davis",
    email: "carol@example.com",
    borrowedBooks: [],
  },
]

const getDecadeFromYear = year => String(Math.floor(Number(year) / 10) * 10)

const countBooksByDecade = books => {
  return books.reduce((decades, book) => {
    const decade = getDecadeFromYear(book.year)
    decades[decade] = (decades[decade] || 0) + 1

    return decades
  }, {})
}

const getMostPopularAuthor = books => {
  const authorCounts = books.reduce((authors, book) => {
    authors[book.author] = (authors[book.author] || 0) + 1

    return authors
  }, {})

  return Object.entries(authorCounts).reduce(
    (mostPopularAuthor, [name, booksCount]) => {
      if (booksCount > mostPopularAuthor.booksCount) {
        return { name, booksCount }
      }

      return mostPopularAuthor
    },
    { name: "", booksCount: 0 },
  )
}

const getBorrowedBooksCount = readers => {
  return readers.reduce((total, reader) => {
    return total + reader.borrowedBooks.length
  }, 0)
}

const getActiveReadersCount = readers => {
  return readers.filter(reader => reader.borrowedBooks.length > 0).length
}

const getStatistics = (books, readers) => {
  const totalBooks = books.length
  const availableBooks = books.filter(book => book.isAvailable).length
  const borrowedBooks = totalBooks - availableBooks
  const borrowedBooksByReaders = getBorrowedBooksCount(readers)
  const consistencyCheck =
    availableBooks + borrowedBooks === totalBooks &&
    borrowedBooksByReaders === borrowedBooks

  if (!consistencyCheck) {
    console.warn("Statistics consistency check failed")
  }

  return {
    totalBooks,
    availableBooks,
    borrowedBooks,
    booksByDecade: countBooksByDecade(books),
    activeReadersCount: getActiveReadersCount(readers),
    mostPopularAuthor: getMostPopularAuthor(books),
    consistencyCheck,
  }
}

const updateStateWithStatistics = updatedState => ({
  ...updatedState,
  statistics: getStatistics(updatedState.books, updatedState.readers),
})

const isSameId = (firstId, secondId) => String(firstId) === String(secondId)

const initialData = {
  books: defaultBooks,
  readers: defaultReaders,
  statistics: getStatistics(defaultBooks, defaultReaders),
  lastUpdated: null,
  editingBook: null,
}

const booksReducer = (state = initialData, action) => {
  const dateUpdated = new Date().toISOString()

  switch (action.type) {
    case "BOOK_ADD":
      return updateStateWithStatistics({
        ...state,
        books: [...state.books, action.payload],
        lastUpdated: dateUpdated,
      })

    case "BOOK_REMOVE":
      if (!action.payload.isAvailable) {
        return state
      }

      return updateStateWithStatistics({
        ...state,
        books: state.books.filter(book => book.id !== action.payload.id),
        lastUpdated: dateUpdated,
      })

    case "BOOK_UPDATE_INFO":
      return updateStateWithStatistics({
        ...state,
        books: state.books.map(book => {
          if (!isSameId(book.id, action.payload.id)) {
            return book
          }

          return {
            ...book,
            title: action.payload.title,
            author: action.payload.author,
            year: action.payload.year,
          }
        }),
        lastUpdated: dateUpdated,
      })
    case "BOOK_TOGGLE_AVAILABILITY": {
      return updateStateWithStatistics({
        ...state,
        books: state.books.map(book => {
          if (!isSameId(book.id, action.payload.id)) {
            return book
          }

          return {
            ...book,
            isAvailable: !book.isAvailable,
          }
        }),
        lastUpdated: dateUpdated,
      })
    }
    case "SET_EDITING_BOOK":
      return {
        ...state,
        editingBook: action.payload,
      }
    case "CLEAR_EDITING_BOOK":
      return {
        ...state,
        editingBook: null,
      }

    case "READER_ADD":
      return updateStateWithStatistics({
        ...state,
        readers: [...state.readers, action.payload],
        lastUpdated: dateUpdated,
      })

    case "READER_REMOVE": {
      const reader = state.readers.find(
        currentReader => currentReader.id === action.payload.id,
      )

      if (!reader || reader.borrowedBooks.length !== 0) {
        return state
      }

      return updateStateWithStatistics({
        ...state,
        readers: state.readers.filter(
          currentReader => currentReader.id !== action.payload.id,
        ),
        lastUpdated: dateUpdated,
      })
    }

    case "BOOK_LEND_TO_READER": {
      const reader = state.readers.find(
        currentReader => currentReader.id === action.payload.readerId,
      )
      const book = state.books.find(currentBook =>
        isSameId(currentBook.id, action.payload.bookId),
      )

      if (!reader || !book || !book.isAvailable) {
        return state
      }

      return updateStateWithStatistics({
        ...state,
        books: state.books.map(currentBook => {
          if (!isSameId(currentBook.id, action.payload.bookId)) {
            return currentBook
          }

          return { ...currentBook, isAvailable: false }
        }),
        readers: state.readers.map(currentReader => {
          if (currentReader.id !== action.payload.readerId) {
            return currentReader
          }

          return {
            ...currentReader,
            borrowedBooks: [
              ...currentReader.borrowedBooks,
              action.payload.bookId,
            ],
          }
        }),
        lastUpdated: dateUpdated,
      })
    }

    case "BOOK_RETURN_FROM_READER": {
      const reader = state.readers.find(
        currentReader => currentReader.id === action.payload.readerId,
      )

      if (
        !reader ||
        !reader.borrowedBooks.some(bookId =>
          isSameId(bookId, action.payload.bookId),
        )
      ) {
        return state
      }

      return updateStateWithStatistics({
        ...state,
        books: state.books.map(currentBook => {
          if (!isSameId(currentBook.id, action.payload.bookId)) {
            return currentBook
          }

          return { ...currentBook, isAvailable: true }
        }),
        readers: state.readers.map(currentReader => {
          if (currentReader.id !== action.payload.readerId) {
            return currentReader
          }

          return {
            ...currentReader,
            borrowedBooks: currentReader.borrowedBooks.filter(
              bookId => !isSameId(bookId, action.payload.bookId),
            ),
          }
        }),
        lastUpdated: dateUpdated,
      })
    }

    default:
      return state
  }
}

export default booksReducer
