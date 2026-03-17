import { useState, useMemo, useCallback } from "react"
import styles from "./styles.module.css"

export default function FormComponent() {
  const [inputs, setInputs] = useState({})

  const handleChange = useCallback(
    event => {
      const changedInput = event.target.name

      setInputs(prev => ({
        ...prev,
        [changedInput]: event.target.value,
      }))
    },
    [inputs],
  )

  const totalCharacters = useMemo(() => {
    return Object.keys(inputs).reduce((accum, item) => {
      return accum + inputs[item].length
    }, 0)
  }, [inputs])

  return (
    <div>
      <form className={styles.form}>
        <h1>Form with Multiple Fields</h1>
        <label>
          First Name{" "}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Last Name{" "}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Email{" "}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={event => handleChange(event)}
          />
        </label>
      </form>
      <p>Total characters: {totalCharacters} </p>
    </div>
  )
}
