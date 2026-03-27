import { useForm } from "react-hook-form"
import { readerAddAction } from "../../redux/actions"
import { connect } from "react-redux"
import readerFormValidation from "../../validator/forms/readerForm"
import styles from "./styles.module.css"

function ReaderForm({ dispatch }) {
  const { name, email } = readerFormValidation

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    dispatch(readerAddAction(data.name, data.email))

    reset()
  }

  return (
    <form className={styles.noteForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <input
          type="text"
          placeholder="Reader name"
          {...register("name", name)}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      <div className={styles.field}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", email)}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <button type="submit">Add Reader</button>
    </form>
  )
}
export default connect()(ReaderForm)
