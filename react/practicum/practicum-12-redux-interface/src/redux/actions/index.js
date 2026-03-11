export const loginAction = username => {
  return { type: "LOGIN", payload: { user: username } }
}

export const logoutAction = () => {
  return { type: "LOGOUT" }
}
