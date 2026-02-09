import styles from "./styles.module.css"
import locationIcon from "../../assets/location-icon.svg"

export default function LatestJobsListItem({
  category,
  categoryColor,
  title,
  location,
  company,
  posted,
  companyIcon,
}) {
  return (
    <li className={styles.card}>
      <div className={styles.top}>
        <span
          className={styles.dot}
          style={{ backgroundColor: categoryColor }}
          aria-hidden="true"
        />
        <span className={styles.category}>{category}</span>
      </div>

      <h3 className={styles.title}>{title}</h3>

      <div className={styles.locationRow}>
        <img className={styles.locationIcon} src={locationIcon} alt="" />
        <span className={styles.locationText}>{location}</span>
      </div>

      <div className={styles.bottom}>
        <div className={styles.company}>
          {companyIcon ? (
            <img
              className={styles.companyLogo}
              src={companyIcon}
              alt={company}
            />
          ) : (
            <span className={styles.companyText}>{company}</span>
          )}
        </div>

        <span className={styles.meta}>
          {company}, {posted}
        </span>
      </div>
    </li>
  )
}
