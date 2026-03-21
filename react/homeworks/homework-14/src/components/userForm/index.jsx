import { useForm } from "react-hook-form"
import { connect } from "react-redux"
import { setUserInfo } from "../../redux/actions"
import editUserFormValidation from "../../validator/forms/editUserForm"
import styles from "./styles.module.css"

function UserForm({ dispatch }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const saveUser = data => {
    dispatch(setUserInfo(data))

    reset()
  }

  const { name, status } = editUserFormValidation

  return (
    <>
      <h2 className={styles.editUserFormTitle}>Edit User Informantion</h2>
      <form onSubmit={handleSubmit(saveUser)} className={styles.form}>
        <label>
          Name <input type="text" {...register("name", name)} />
        </label>
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        <label>
          Status{" "}
          <select {...register("status", status)}>
            <option value="">Choose</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </label>
        {errors.status && (
          <p className={styles.error}>{errors.status.message}</p>
        )}
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default connect()(UserForm)
