function MovieCard({ movie }) {
  return (
    <div>
      <h2>Title: {movie.title}</h2>
      <h3>Year: {movie.year}</h3>
      <hr />
    </div>
  )
}

export default MovieCard
