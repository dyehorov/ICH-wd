export const addTodoAction = data => {
  return {
    type: "ADD_TODO",
    payload: data,
  }
}

export const deleteTodoAction = id => {
  return {
    type: "DELETE_TODO",
    payload: { id },
  }
}

export const editTodoAction = data => {
  return {
    type: "EDIT_TODO",
    payload: data,
  }
}

export const setEditingNoteAction = note => {
  return {
    type: "SET_EDITING_NOTE",
    payload: note,
  }
}

export const clearEditingNoteAction = () => {
  return {
    type: "CLEAR_EDITING_NOTE",
  }
}
