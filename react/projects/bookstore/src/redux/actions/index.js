export const bookAddAction = data => {
  return {
    type: "BOOK_ADD",
    payload: data,
  }
}

export const bookRemoveAction = (id, isAvailable) => {
  return {
    type: "BOOK_REMOVE",
    payload: { id, isAvailable },
  }
}

export const bookUpdateInfoAction = book => {
  return {
    type: "BOOK_UPDATE_INFO",
    payload: book,
  }
}

export const bookToggleAvailabilityAction = id => {
  return {
    type: "BOOK_TOGGLE_AVAILABILITY",
    payload: { id },
  }
}

export const setEditingBookAction = book => {
  return {
    type: "SET_EDITING_BOOK",
    payload: book,
  }
}

export const clearEditingNoteAction = () => {
  return {
    type: "CLEAR_EDITING_BOOK",
  }
}

export const readerAddAction = (name, email) => {
  const nextReaderId = Date.now()

  return {
    type: "READER_ADD",
    payload: {
      id: nextReaderId,
      name,
      email,
      borrowedBooks: [],
    },
  }
}

export const readerRemoveAction = id => {
  return {
    type: "READER_REMOVE",
    payload: { id },
  }
}

export const bookLendToReaderAction = (bookId, readerId) => {
  return {
    type: "BOOK_LEND_TO_READER",
    payload: { bookId, readerId },
  }
}

export const bookReturnFromReaderAction = (bookId, readerId) => {
  return {
    type: "BOOK_RETURN_FROM_READER",
    payload: { bookId, readerId },
  }
}
