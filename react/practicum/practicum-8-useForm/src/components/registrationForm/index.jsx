import { useForm } from "react-hook-form"
import { useContext } from "react"
import styles from "./styles.module.css"
import UserContext from "../../context/userContext"
import registerFormValidation from "../../validator/forms/registerForm"

export default function RegistrationForm() {
  const { loginUser } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { login, email, password } = registerFormValidation

  return (
    <form
      className={styles.registrationForm}
      onSubmit={handleSubmit(loginUser)}
    >
      <h1>Welcome to website</h1>
      <label>
        Login
        <input type="text" {...register("login", login)} />
      </label>
      {errors.login && <p>{errors.login.message}</p>}
      <label>
        Email
        <input type="text" {...register("email", email)} />
      </label>
      {errors.email && <p>{errors.email.message}</p>}
      <label>
        Password
        <input type="password" {...register("password", password)} />
      </label>
      {errors.password && <p>{errors.password.message}</p>}
      <button type="submit">Register</button>
    </form>
  )
}
