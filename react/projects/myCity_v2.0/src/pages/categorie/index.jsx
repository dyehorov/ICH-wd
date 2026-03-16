import { useParams, Link, Navigate } from "react-router-dom"
import { initialCategories } from "../../data.js"

function Categorie() {
  const { categorieId } = useParams()

  const category = initialCategories.find(
    categorie => categorie.id === categorieId,
  )

  return (
    <div className="district-page">
      <div className="district-header">
        <Link to="/categories" className="back-link">
          ← Back to Categories
        </Link>
        <h1>{category.name}</h1>
        <p className="district-description">{category.description}</p>
      </div>

      <div className="places-section">
        <h2>Category Attractions</h2>
        <div className="places-grid">
          {category.places.map(place => (
            <Link
              to={`/categories/${categorieId}/places/${place.id}`}
              key={place.id}
              className="place-card"
            >
              <div className="place-emoji">{place.image}</div>
              <div className="place-info">
                <h3>{place.name}</h3>
                <p>{place.description.substring(0, 60)}...</p>
                <span className="view-details">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categorie
