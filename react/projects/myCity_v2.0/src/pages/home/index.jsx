import { Link } from "react-router-dom"
import "./styles.css"

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to our city!</h1>
        <p>Discover amazing places and attractions.</p>
        <Link to="/districts" className="cta-button">
          Explore districts →
        </Link>
      </div>
      <div className="features">
        <h2>Why should you visit our city?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🏛️</span>
            <h3>Rich history</h3>
            <p>
              A city with centuries of history and unique architectural
              monuments.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🌳</span>
            <h3>Scenic parks</h3>
            <p>Many green areas for relaxation and walks.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎭</span>
            <h3>Cultural life</h3>
            <p>Theaters, museums, and exhibitions for every taste.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
