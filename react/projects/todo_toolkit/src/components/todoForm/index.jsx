import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addTodo } from "../../redux/slices/todosSlice"

import styles from "./styles.module.css"

function TodoForm({}) {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = data => {
    dispatch(addTodo(data.todoText))

    reset()
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.todoInputLabel}>
        <input
          type="text"
          placeholder="Todo"
          {...register("todoText", {
            required: "Todo is required",
          })}
        />
        {errors.todoText && (
          <p className={styles.error}>{errors.todoText.message}</p>
        )}
      </label>

      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoForm
