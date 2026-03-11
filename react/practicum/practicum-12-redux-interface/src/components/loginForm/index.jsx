import styles from "./styles.module.css"
import { useForm } from "react-hook-form"
import { connect } from "react-redux"
import { loginAction } from "../../redux/actions"

function LoginForm({ dispatch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    dispatch(loginAction(data.username))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>Login form</h2>
      <label>
        Username:
        <input
          type="text"
          {...register("username", { required: "Title is required" })}
        />
        {errors.username && (
          <p className={styles.error}>{errors.username.message}</p>
        )}
      </label>
      <label>
        Password
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </label>
      <button type="submit">Login</button>
    </form>
  )
}

export default connect()(LoginForm)
