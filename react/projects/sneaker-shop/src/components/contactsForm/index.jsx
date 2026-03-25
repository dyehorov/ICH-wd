import styles from "./styles.module.css"
import { useForm } from "react-hook-form"
import ContactsFormValidator from "../../validator/forms/contactsFormValidator"

export default function ContactsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    console.log(data)
    reset()
  }

  const { email, name, message } = ContactsFormValidator

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.topFields}>
        <div>
          <input
            className={styles.input}
            type="email"
            placeholder="Your email"
            {...register("email", email)}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Your name"
            {...register("name", name)}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>
      </div>

      <div>
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          placeholder="Enter your message"
          {...register("message", message)}
        />
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}
      </div>

      <button className={styles.button} type="submit">
        Send
      </button>
    </form>
  )
}
