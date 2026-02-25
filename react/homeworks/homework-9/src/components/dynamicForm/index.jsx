import { useForm } from "react-hook-form"
import styles from "./styles.module.css"

export default function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  function onSubmit(data) {
    console.log(data)

    reset()
  }

  const firstField = watch("firstField")

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        {" "}
        First input
        <input
          type="text"
          {...register("firstField", { required: "First field is required" })}
        />
        {errors.firstField && <p>{errors.firstField.message}</p>}
      </label>
      {firstField?.length >= 5 && (
        <label>
          {" "}
          Second input
          <input
            type="text"
            {...register("secondField", {
              required: "Second field is required",
            })}
          />
          {errors.secondField && <p>{errors.secondField.message}</p>}
        </label>
      )}

      <button type="submit">Submit</button>
    </form>
  )
}
