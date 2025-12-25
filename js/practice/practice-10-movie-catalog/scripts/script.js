const KEY = "123116da"
const BASE_URL = "https://www.omdbapi.com"
const searchMovieForm = document.querySelector(".search-movie-form")
const movieList = document.querySelector(".movie-list")
const movieFullDescriptionContainer = document.querySelector(
  ".movie-full-description"
)
const filterForm = document.querySelector(".filter-form")
const filterByGenreWrapper = document.querySelector(".filter-by-genre-wrapper")
const modal = document.querySelector(".movie-full-description")
const overlay = document.querySelector(".modal-overlay")
const closeModalBtn = modal.querySelector(".close-modal-button")
const loader = document.querySelector(".loader")
const themeThumbler = document.querySelector(".theme-thumbler-wrapper")
const thumbler = themeThumbler.querySelector(".thumbler")
let theme = JSON.parse(localStorage.getItem("theme")) ?? true
let movieGenres = []
let movies = []
let genresToFilterMovies = []

window.addEventListener("DOMContentLoaded", () => {
  if (theme) {
    thumbler.classList.remove("thumbler-dark")
  } else {
    thumbler.classList.add("thumbler-dark")
  }
})

themeThumbler.addEventListener("click", () => {
  thumbler.classList.toggle("thumbler-dark")

  theme = !theme

  localStorage.setItem("theme", JSON.stringify(theme))

  console.log(theme)
})

searchMovieForm.addEventListener("submit", async event => {
  event.preventDefault()
  filterForm.classList.add("hiddenForm")

  const searchText = event.target.elements.search.value.trim()
  if (!searchText) return

  reset()
  loader.classList.remove("hidden")

  try {
    const searchResults = await getSearchedMovie(searchText)
    movies = await loadMovies(searchResults)

    renderGenres(movies)
    renderMovies(movies)

    filterForm.classList.remove("hiddenForm")
  } catch (error) {
    console.error(error)
  } finally {
    loader.classList.add("hidden")
  }
})

filterForm.addEventListener("click", event => {
  console.log(event.target.id)
})

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMovieModal()
})

closeModalBtn.addEventListener("click", closeMovieModal)

async function getSearchedMovie(movie) {
  try {
    const response = await fetch(`${BASE_URL}/?s=${movie}&apikey=${KEY}`)
    const data = await response.json()

    if (data.Response === "False") {
      movieList.innerHTML = "<h2>Movie not found!</h2>"

      return []
    }

    return data.Search
  } catch (error) {
    console.log(error)

    return []
  }
}

async function getDataFromImdb(imdbId) {
  try {
    const response = await fetch(`${BASE_URL}/?i=${imdbId}&apikey=${KEY}`)

    if (!response.ok) {
      throw new Error("Failed while getting data")
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

async function loadMovies(searchResults) {
  const requests = searchResults.map(item => getDataFromImdb(item.imdbID))
  const results = await Promise.allSettled(requests)

  return results
    .filter(result => result.status === "fulfilled")
    .map(result => result.value)
}

function createMovieItem(movie) {
  const li = document.createElement("li")
  li.className = "movie"

  li.innerHTML = `
    <div class="movie-poster" style="background-image: url(${movie.Poster})">
      <div class="movie-rating">
        <span>IMDb ${movie.imdbRating}</span>
      </div>
    </div>
    <div class="movie-info">
      <p class="movie-name">${movie.Title}</p>
      <p class="movie-year-and-genre">
          ${formatYear(movie.Year)}, ${movie.Genre}
      </p>
      <p class="movie-short-description">
        ${truncateText(movie.Plot, 100)}
      </p>
      <button class="movie-button">More...</button>
    </div>
  `

  const moreBtn = li.querySelector(".movie-button")
  moreBtn.addEventListener("click", () => {
    openMovieModal(movie)
  })

  return li
}

function renderMovies(movies) {
  movieList.innerHTML = ""

  movies.forEach(movie => {
    movieList.appendChild(createMovieItem(movie))
  })
}

function renderGenres(movies) {
  filterByGenreWrapper.innerHTML = ""
  movieGenres = []

  movies.forEach(movie => {
    movieGenres.push(...movie.Genre.split(", "))
  })

  const uniqueGenres = [...new Set(movieGenres)]

  uniqueGenres.forEach(genre => {
    filterByGenreWrapper.appendChild(createGenresForFilter(genre))
  })
}

function reset() {
  movieList.innerHTML = ""
  filterByGenreWrapper.innerHTML = ""
  movieGenres = []
  genresToFilterMovies = []
}

function openMovieModal(movie) {
  modal.querySelector("[data-title]").textContent = movie.Title
  modal.querySelector("[data-poster]").src = movie.Poster
  modal.querySelector("[data-director]").textContent = movie.Director
  modal.querySelector("[data-country]").textContent = movie.Country
  modal.querySelector("[data-release]").textContent = movie.Released
  modal.querySelector("[data-actors]").textContent = movie.Actors
  modal.querySelector("[data-runtime]").textContent = movie.Runtime
  modal.querySelector("[data-rating]").textContent = movie.imdbRating
  modal.querySelector("[data-plot]").textContent = movie.Plot
  modal.querySelector("[data-trailer]").href = getYoutubeLink(movie.Title)

  modal.classList.remove("modal-hidden")
  overlay.classList.remove("modal-hidden")
}

function createGenresForFilter(movieGenre) {
  const label = document.createElement("label")
  label.className = "filterCheckbox"

  label.innerHTML = `<input type="checkbox" class="filterCheckbox" name="${movieGenre}" id="${movieGenre}" />${movieGenre}`

  return label
}

function closeMovieModal() {
  modal.classList.add("modal-hidden")
  overlay.classList.add("modal-hidden")
}

function truncateText(text, maxLength = 100) {
  if (!text) return ""
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + "..."
    : text
}

function formatYear(year) {
  const y = String(year ?? "").trim()

  if (/[–—-]$/.test(y)) {
    return `${y}...`
  }

  return y
}

function getYoutubeLink(movie) {
  return `https://www.youtube.com/results?search_searchInput=${movie
    .toLowerCase()
    .split(" ")
    .join("+")}+trailer`
}
