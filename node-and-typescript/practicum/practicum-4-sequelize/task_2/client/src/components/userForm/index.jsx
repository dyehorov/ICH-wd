import styles from "./styles.module.css"
import userFormValidator from "../../validator/userFormValidator"
import axios from "axios"
import { useForm } from "react-hook-form"
import { useState } from "react"

export default function UserForm() {
  const [registerMessage, setRegisterMessage] = useState("")
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm()

  const { name, email } = userFormValidator

  const registerUser = async data => {
    setRegisterMessage("")
    setError(false)

    try {
      const response = await axios.post(
        "http://127.0.0.1:3333/user/create",
        data,
      )

      setRegisterMessage("User created successfully")
      reset()
    } catch (error) {
      if (error.response) {
        setRegisterMessage(error.response.data.message)
        setError(true)
      } else {
        setRegisterMessage("Server error")
        setError(true)
      }
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
        <p className={error ? styles.error : styles.successMessage}>
          {registerMessage}
        </p>
      )}
    </form>
  )
}
