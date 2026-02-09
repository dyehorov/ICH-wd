import styles from "./styles.module.css"

export default function CategoriesList({ categories }) {
  return (
    <ul className={styles.categoriesList}>
      {categories.map(categorie => {
        return (
          <li key={categorie.id} className={styles.categoriesListItem}>
            <div className={styles.categorieIcon}>
              <img src={categorie.icon} alt="Category icon" />
            </div>
            <p className={styles.categorieTitle}>{categorie.label}</p>
          </li>
        )
      })}
    </ul>
  )
}
