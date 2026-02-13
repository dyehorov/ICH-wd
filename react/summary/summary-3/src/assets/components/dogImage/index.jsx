import { useState } from "react"
import { ClipLoader } from "react-spinners"

export default function DogImage({ image }) {
  const [loading, setLoading] = useState(true)

  return (
    <li className="item">
      {loading && <ClipLoader />}

      <img
        src={image}
        alt="dog"
        onLoad={() => setLoading(false)}
        style={{ display: loading ? "none" : "block" }}
      />
    </li>
  )
}
