import styles from "./styles.module.css"
import searchIcon from "../../assets/search-icon.svg"
import locationIcon from "../../assets/location-icon.svg"

export default function Search() {
  return (
    <form className={styles.search}>
      <div className={styles.group}>
        <img src={searchIcon} alt="Search icon" className={styles.icon} />
        <input
          className={styles.input}
          type="text"
          placeholder="Job title or company"
        />
      </div>

      <div className={styles.divider} />

      <div className={styles.group}>
        <img src={locationIcon} alt="Location icon" className={styles.icon} />
        <input
          className={styles.input}
          type="text"
          placeholder="City, Country"
        />
      </div>

      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  )
}
