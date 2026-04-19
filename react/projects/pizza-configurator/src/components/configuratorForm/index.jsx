import styles from "./styles.module.css"

const baseOptions = ["thin", "thick", "cheesy"]
const sauceOptions = ["tomato", "creamy", "bbq"]
const cheeseOptions = ["mozzarella", "cheddar", "vegan"]
const toppingOptions = [
  "pepperoni",
  "mushrooms",
  "olives",
  "onions",
  "bacon",
  "pineapple",
]
const sizeOptions = ["small", "medium", "large"]

export default function ConfiguratorForm({ values, onChange }) {
  return (
    <form className={styles.form}>
      <div className={styles.group}>
        <label>Base</label>
        <select
          value={values.base}
          onChange={e => onChange("base", e.target.value)}
        >
          {baseOptions.map(opt => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className={styles.group}>
        <label>Sauce</label>
        <select
          value={values.sauce}
          onChange={e => onChange("sauce", e.target.value)}
        >
          {sauceOptions.map(opt => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Cheese */}
      <div className={styles.group}>
        <label>Cheese</label>
        <select
          value={values.cheese}
          onChange={e => onChange("cheese", e.target.value)}
        >
          {cheeseOptions.map(opt => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className={styles.group}>
        <label>Size</label>
        <div className={styles.row}>
          {sizeOptions.map(opt => (
            <label key={opt}>
              <input
                type="radio"
                name="size"
                checked={values.size === opt}
                onChange={() => onChange("size", opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      </div>
      <div className={styles.group}>
        <label>Toppings</label>
        <div className={styles.grid}>
          {toppingOptions.map(opt => (
            <label key={opt}>
              <input
                type="checkbox"
                checked={values.toppings.includes(opt)}
                onChange={e => {
                  if (e.target.checked) {
                    onChange("toppings", [...values.toppings, opt])
                  } else {
                    onChange(
                      "toppings",
                      values.toppings.filter(t => t !== opt),
                    )
                  }
                }}
              />
              {opt}
            </label>
          ))}
        </div>
      </div>
    </form>
  )
}
