import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export default function Articles({ articles }) {
  return (
    <div className={styles.container}>
      <ul>
        <h2>Articles</h2>
        {articles.length !== 0 &&
          articles.map(article => (
            <li key={article.id}>
              <p>{article.title}</p>

              <Link to={`/articles/article/${article.id}`}>
                Open article: {article.id}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
