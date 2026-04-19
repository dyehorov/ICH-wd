import styles from "./styles.module.css"
import thinBase from "../../assets/images/thin-base.png"
import ConfiguratorForm from "../configuratorForm"
import { useState } from "react"

export default function ConfiguratorWindow() {
  const [values, setValues] = useState({
    base: "thin",
    sauce: "tomato",
    cheese: "mozzarella",
    toppings: [],
    size: "medium",
  })

  function handleValueChange(key, value) {
    setValues(current => ({
      ...current,
      [key]: value,
    }))
  }

  return (
    <div className={styles.configuratorWindow}>
      <h2>Configure your pizza</h2>
      <div className={styles.innerContent}>
        <div className={styles.innerContentLeft}>
          <div className={styles.pizzaImage}>
            <img src={thinBase} alt="" />
          </div>
        </div>
        <ConfiguratorForm values={values} onChange={handleValueChange} />
      </div>
    </div>
  )
}
