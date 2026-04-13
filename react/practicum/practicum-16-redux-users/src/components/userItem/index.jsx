import { useDispatch } from "react-redux"
import { deleteUser, editUser } from "../../redux/slices/usersSlice"

export default function UserItem({ id, name, age, email }) {
  const dispatch = useDispatch()

  return (
    <li style={{ display: "flex", gap: "12px" }}>
      <span>{`${name}, ${age}, ${email}`}</span>

      <button onClick={() => dispatch(editUser(id))}>Edit</button>
      <button onClick={() => dispatch(deleteUser(id))}>Delete</button>
    </li>
  )
}
