import { Link } from "react-router-dom"
import "./styles.css"
import BasicPie from "../../components/statisticChart"

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Travel Planner</h1>
        <p>Discover amazing places and attractions.</p>
        <Link to="/categories" className="cta-button">
          Explore categories →
        </Link>
      </div>
      <div className="statistic">
        <BasicPie />
      </div>
    </div>
  )
}

export default Home
