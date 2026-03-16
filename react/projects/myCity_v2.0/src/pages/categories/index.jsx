import { Link } from "react-router-dom"
import { initialCategories } from "../../data.js"

function Categories() {
  return (
    <div className="districts">
      <h1>Categories</h1>
      <p className="subtitle">
        Select a district to learn about its attractions
      </p>

      <div className="districts-grid">
        {initialCategories.map(category => (
          <Link
            to={`/categories/${category.id}`}
            key={category.id}
            className="district-card"
          >
            <div className="card-main">
              <h2>{category.name}</h2>
              <p>{category.image}</p>
            </div>
            <div className="card-footer">
              <span className="places-count">
                {category.places.length}{" "}
                {category.places.length === 1 ? "place" : "places"}
              </span>
              <span className="view-link">Learn more →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories
