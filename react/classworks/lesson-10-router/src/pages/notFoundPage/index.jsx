import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function NotFoundPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/")
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div>
      <h1>404 Not found</h1>
      {/* <p>
        This page was not found, go back to <Link to={"/"}>Home</Link> page
      </p> */}
      <p>
        This page was not found, you will be redirected to Home page in 3
        seconds!
      </p>
    </div>
  )
}
