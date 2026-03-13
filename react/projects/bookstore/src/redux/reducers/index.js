const initialData = {
  books: [],
  lastUpdated: null,
  editingBook: null,
}

const booksReducer = (state = initialData, action) => {
  switch (action.type) {
    case "BOOK_ADD":
      return { ...state, books: [...state.books, action.payload] }

    case "BOOK_REMOVE":
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload.id),
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

    default:
      return state
  }
}

export default booksReducer
