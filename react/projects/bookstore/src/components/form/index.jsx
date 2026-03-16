import styles from "./styles.module.css"

export default function Form({
  fields,
  register,
  errors,
  onSubmit,
  submitLabel,
}) {
  const getErrorMessage = field => {
    const fieldError = errors[field.name]

    if (!fieldError) {
      return ""
    }

    if (typeof field.getErrorMessage === "function") {
      return field.getErrorMessage(fieldError)
    }

    return fieldError.message || "Invalid value"
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {fields.map(field => {
        const errorMessage = getErrorMessage(field)

        return (
          <div key={field.name} className={styles.field}>
            <input
              type={field.type || "text"}
              placeholder={field.placeholder}
              {...register(field.name, field.rules)}
            />
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          </div>
        )
      })}

      <button type="submit">{submitLabel}</button>
    </form>
  )
}
