import { useParams, Link, Navigate } from "react-router-dom"
import { initialCategories } from "../../data.js"

const Place = ({ favorites, setFavorites }) => {
  const { categorieId, placeId } = useParams()

  const category = initialCategories.find(
    category => category.id === categorieId,
  )

  if (!category) {
    return <Navigate to="/404" replace />
  }

  const place = category.places.find(place => place.id === placeId)
  const isFavorited = favorites.some(item => item.id === placeId)

  const handleFavoriteToggle = () => {
    if (isFavorited) {
      setFavorites(prev => prev.filter(item => item.id !== placeId))
      return
    }

    setFavorites(prev => [...prev, { ...place, categoryId: categorieId }])
  }

  if (!place) {
    return (
      <div className="place-not-found">
        <h2>Place not found</h2>
        <p>
          Sorry, an attraction with this name does not exist in this district.
        </p>
        <Link to={`/categories/${categorieId}`} className="back-button">
          Back to Categories
        </Link>
      </div>
    )
  }

  return (
    <div className="place-page">
      <div className="place-header">
        <Link to={`/categories/${categorieId}`} className="back-link">
          ← Back to Categories
        </Link>
      </div>

      <div className="place-detail">
        <div className="place-emoji-large">{place.image}</div>
        <h1>{place.name}</h1>
        <p className="place-full-description">{place.description}</p>

        <div className="place-meta">
          <div className="meta-item">
            <span className="meta-label">District:</span>
            <Link to={`/categories/${categorieId}`} className="meta-value">
              {category.name}
            </Link>
          </div>
        </div>

        <div className="action-buttons">
          <button onClick={() => window.history.back()} className="back-button">
            ← Back
          </button>
          <button
            onClick={handleFavoriteToggle}
            className={`favorite-button${isFavorited ? " is-favorited" : ""}`}
          >
            {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Place
