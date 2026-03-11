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
