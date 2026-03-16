import "./App.css"
import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/home"
import Categories from "./pages/categories"
import Categorie from "./pages/categorie"
import Place from "./pages/place"
import NotFound from "./pages/notFound"
import Favorites from "./pages/favorites"
import { useState } from "react"

window.document.title = "Home"

function App() {
  const [favorites, setFavorites] = useState([])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:categorieId" element={<Categorie />} />
        <Route
          path="categories/:categorieId/places/:placeId"
          element={<Place favorites={favorites} setFavorites={setFavorites} />}
        />
        <Route
          path="favorites"
          element={<Favorites favorites={favorites} setFavorites={setFavorites} />}
        />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
