const initialData = {
  books: [],
  readers: [],
  lastUpdated: null,
  editingBook: null,
}

const booksReducer = (state = initialData, action) => {
  const dateUpdated = new Date().toISOString()

  switch (action.type) {
    case "BOOK_ADD":
      return {
        ...state,
        books: [...state.books, action.payload],
        lastUpdated: dateUpdated,
      }

    case "BOOK_REMOVE":
      if (!action.payload.isAvailable) {
        return state
      }

      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload.id),
        lastUpdated: dateUpdated,
      }

    case "BOOK_UPDATE_INFO":
      return {
        ...state,
        books: state.books.map(book => {
          if (book.id !== action.payload.id) {
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
      }
    case "BOOK_TOGGLE_AVAILABILITY": {
      return {
        ...state,
        books: state.books.map(book => {
          if (book.id !== action.payload.id) {
            return book
          }

          return {
            ...book,
            isAvailable: !book.isAvailable,
          }
        }),
        lastUpdated: dateUpdated,
      }
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
      return {
        ...state,
        readers: [...state.readers, action.payload],
        lastUpdated: dateUpdated,
      }

    case "READER_REMOVE": {
      const reader = state.readers.find(
        currentReader => currentReader.id === action.payload.id,
      )

      if (!reader || reader.borrowedBooks.length !== 0) {
        return state
      }

      return {
        ...state,
        readers: state.readers.filter(
          currentReader => currentReader.id !== action.payload.id,
        ),
        lastUpdated: dateUpdated,
      }
    }

    case "BOOK_LEND_TO_READER": {
      const reader = state.readers.find(
        currentReader => currentReader.id === action.payload.readerId,
      )
      const book = state.books.find(
        currentBook => currentBook.id === action.payload.bookId,
      )

      if (!reader || !book || !book.isAvailable) {
        return state
      }

      return {
        ...state,
        books: state.books.map(currentBook => {
          if (currentBook.id !== action.payload.bookId) {
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
            borrowedBooks: [...currentReader.borrowedBooks, action.payload.bookId],
          }
        }),
        lastUpdated: dateUpdated,
      }
    }

    case "BOOK_RETURN_FROM_READER": {
      const reader = state.readers.find(
        currentReader => currentReader.id === action.payload.readerId,
      )

      if (!reader || !reader.borrowedBooks.includes(action.payload.bookId)) {
        return state
      }

      return {
        ...state,
        books: state.books.map(currentBook => {
          if (currentBook.id !== action.payload.bookId) {
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
              bookId => bookId !== action.payload.bookId,
            ),
          }
        }),
        lastUpdated: dateUpdated,
      }
    }

    default:
      return state
  }
}

export default booksReducer
