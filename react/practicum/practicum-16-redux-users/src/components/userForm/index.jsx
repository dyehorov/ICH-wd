import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addUser, updateUser } from "../../redux/slices/usersSlice"

export default function UserForm() {
  const [nameValue, setNameValue] = useState("")
  const [ageValue, setAgeValue] = useState("")
  const [emailValue, setEmailValue] = useState("")

  const dispatch = useDispatch()

  const { isEditting, formValues, editingId } = useSelector(
    state => state.users,
  )

  useEffect(() => {
    if (isEditting) {
      setNameValue(formValues.name)
      setAgeValue(formValues.age)
      setEmailValue(formValues.email)
    } else {
      setNameValue("")
      setAgeValue("")
      setEmailValue("")
    }
  }, [isEditting, formValues])

  const handleSubmit = event => {
    event.preventDefault()

    if (isEditting) {
      dispatch(
        updateUser({
          id: editingId,
          name: nameValue,
          age: ageValue,
          email: emailValue,
        }),
      )
      return
    }

    const user = {
      id: Date.now(),
      name: nameValue,
      age: ageValue,
      email: emailValue,
    }

    dispatch(addUser(user))
    setNameValue("")
    setAgeValue("")
    setEmailValue("")
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Name"
        value={nameValue}
        onChange={event => setNameValue(event.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={ageValue}
        onChange={event => setAgeValue(event.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={emailValue}
        onChange={event => setEmailValue(event.target.value)}
        required
      />
      <input type="submit" value={isEditting ? "Edit User" : "Add User"} />
    </form>
  )
}
