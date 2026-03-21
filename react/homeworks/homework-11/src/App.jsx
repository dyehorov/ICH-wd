import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Articles from "./pages/articles"
import Article from "./pages/article"
import Nav from "./components/nav"

const articles = [
  {
    id: 1,
    title: "Article 1",
    content: "Article 1 content...",
  },
  {
    id: 2,
    title: "Article 2",
    content: "Article 2 content...",
  },
  {
    id: 3,
    title: "Article 3",
    content: "Article 3 content...",
  },
]

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles articles={articles} />} />
        <Route
          path="/articles/article/:articleId"
          element={<Article articles={articles} />}
        />
      </Routes>
    </>
  )
}
