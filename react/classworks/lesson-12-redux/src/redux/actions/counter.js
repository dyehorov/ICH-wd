export const plusOneAction = () => {
  return { type: "PLUS" }
}

export const minusOneAction = () => {
  return { type: "MINUS" }
}

export const resetAction = () => {
  return { type: "RESET" }
}

export const sendDataAction = data => {
  return { type: "SEND_DATA", payload: data }
}
