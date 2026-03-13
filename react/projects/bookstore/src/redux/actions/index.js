export const bookAddAction = data => {
  return {
    type: "BOOK_ADD",
    payload: data,
  }
}

export const bookRemoveAction = id => {
  return {
    type: "BOOK_REMOVE",
    payload: { id },
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
