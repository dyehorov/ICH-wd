import { Link } from "react-router-dom"

function Favorites({ favorites, setFavorites }) {
  const removeFavorite = placeId => {
    setFavorites(prev => prev.filter(item => item.id !== placeId))
  }

  if (favorites.length === 0) {
    return (
      <div className="districts">
        <h1>Favorites</h1>
        <p className="subtitle">You have no favorite places yet.</p>
      </div>
    )
  }

  return (
    <div className="districts">
      <h1>Favorites</h1>
      <p className="subtitle">Explore your favorite places</p>

      <div className="districts-grid">
        {favorites.map(place => (
          <div key={place.id} className="district-card">
            <div className="card-main">
              <h2>{place.name}</h2>
              <p>{place.image}</p>
            </div>
            <div className="card-footer">
              <Link
                to={`/categories/${place.categoryId}/places/${place.id}`}
                className="view-link"
              >
                Learn more →
              </Link>
              <button
                onClick={() => removeFavorite(place.id)}
                className="back-button"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
