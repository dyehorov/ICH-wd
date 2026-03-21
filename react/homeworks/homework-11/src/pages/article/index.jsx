import { useParams, useNavigate, useLocation } from "react-router-dom"

export default function Article({ articles }) {
  const { articleId } = useParams()
  const location = useLocation()

  const { pathname } = location

  const navigate = useNavigate()

  const article = articles.find(article => article.id === Number(articleId))

  if (!article) return <h2>article not found</h2>

  return (
    <>
      <h2>Article #{articleId}</h2>
      <p>{article.content}</p>
      <p>Current path: {pathname}</p>
      <button onClick={() => navigate(-1)}>{"<- Back to articles"}</button>
    </>
  )
}
