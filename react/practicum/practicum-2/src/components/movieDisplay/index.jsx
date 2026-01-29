import MovieCard from "../movieCard"

function MovieDisplay({ moviesData }) {
  return (
    <div>
      {moviesData.map(movie => {
        return <MovieCard key={movie.id} movie={movie} />
      })}
    </div>
  )
}

export default MovieDisplay
