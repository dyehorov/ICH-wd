import { useForm } from "react-hook-form"

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" })

  return (
    <form>
      <label>
        Login
        <input type="text" {...register("login")} />
      </label>
    </form>
  )
}
