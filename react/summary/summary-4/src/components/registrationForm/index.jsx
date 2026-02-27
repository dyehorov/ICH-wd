import { useForm } from "react-hook-form"
import axios from "axios"
import RegistrationFormValidator from "../validator/forms/registrationFormValidator"

const BASE_URL = "https://699eb2fb78dda56d396b079c.mockapi.io/posts"

export default function RegistrationForm() {
  const {
    login,
    email,
    firstName,
    lastName,
    password,
    confirmPassword,
    age,
    phone,
  } = RegistrationFormValidator

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" })

  const onSubmit = async data => {
    const userData = {
      login: data.login,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      age: data.age,
      phone: data.phone,
    }

    try {
      const response = await axios.post(BASE_URL, userData)

      console.log(response)

      reset()
    } catch (error) {
      console.log(error)
    }
  }

  const passwordInput = watch("password")

  const checkLogin = async value => {
    if (!value || value.length < 4) return true

    try {
      const response = await axios.get(`${BASE_URL}?login=${value}`)

      if (Array.isArray(response.data) && response.data.length > 0) {
        return "Login is already taken"
      }

      return true
    } catch (error) {
      console.log(error)
      return "Cannot check login"
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Login
        <input
          type="text"
          {...register("login", {
            ...login,
            validate: checkLogin,
          })}
        />
        {errors.login && <p style={{ color: "red" }}>{errors.login.message}</p>}
      </label>
      <label>
        Email
        <input type="text" {...register("email", email)} />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </label>
      <label>
        First name
        <input type="text" {...register("firstName", firstName)} />
        {errors.firstName && (
          <p style={{ color: "red" }}>{errors.firstName.message}</p>
        )}
      </label>
      <label>
        Last name
        <input type="text" {...register("lastName", lastName)} />
        {errors.lastName && (
          <p style={{ color: "red" }}>{errors.lastName.message}</p>
        )}
      </label>
      <label>
        Password
        <input type="password" {...register("password", password)} />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </label>
      <label>
        Confirm password
        <input
          type="password"
          {...register("confirmPassword", {
            ...confirmPassword,
            validate: value =>
              value === passwordInput || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
        )}
      </label>
      <label>
        Age
        <input type="number" {...register("age", age)} />
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
      </label>
      <label>
        Phone
        <input type="text" {...register("phone", phone)} />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
      </label>

      <button type="submit">Register</button>
    </form>
  )
}
