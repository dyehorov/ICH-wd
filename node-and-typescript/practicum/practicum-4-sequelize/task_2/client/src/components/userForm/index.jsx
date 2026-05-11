import styles from "./styles.module.css"
import userFormValidator from "../../validator/userFormValidator"
import axios from "axios"
import { useForm } from "react-hook-form"
import { useState } from "react"

export default function UserForm() {
  const [registerMessage, setRegisterMessage] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm()

  const { name, email } = userFormValidator

  const registerUser = async data => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:3333/user/create",
        data,
      )

      setRegisterMessage(response.data.message)
      reset()
    } catch (error) {
      console.error(`There was an error registering a user: ${error}`)
    }
  }

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <h1>Registration From</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>
          Name <input {...register("name", name)} />
        </label>
        {errors.name && <p>{errors.name.message}</p>}
        <label>
          Email <input {...register("email", email)} />
        </label>
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <button type="submit" disabled={!isValid || isSubmitting}>
        Register
      </button>
      {registerMessage && (
        <p className={styles.successMessage}>{registerMessage}</p>
      )}
    </form>
  )
}
