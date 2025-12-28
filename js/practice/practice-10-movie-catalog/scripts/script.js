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
const isLight = JSON.parse(localStorage.getItem("lightTheme")) ?? true
const fromYearInput = document.querySelector("#filterFromYear")
const toYearInput = document.querySelector("#filterToYear")
const ratingInput = document.querySelector("#rating")
const favoriteBtn = document.querySelector(".favorite-movies")
const favoritesModal = document.querySelector(".favorites-modal")
const favoritesMovieList = document.querySelector(".favorites-movie-list")
const closeFavoritesBtn = document.querySelector(".close-favorites-modal")

let movieGenres = []
let movies = []
let genresToFilterMovies = []

if (isLight) {
  document.body.classList.add("light")
  thumbler.classList.add("thumbler-dark")
}

themeThumbler.addEventListener("click", () => {
  document.body.classList.toggle("light")
  thumbler.classList.toggle("thumbler-dark")

  const isLightTheme = document.body.classList.contains("light")
  localStorage.setItem("lightTheme", JSON.stringify(isLightTheme))
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

filterForm.addEventListener("change", event => {
  if (event.target.type !== "checkbox") return

  const genre = event.target.id

  if (event.target.checked) {
    genresToFilterMovies.push(genre)
  } else {
    genresToFilterMovies = genresToFilterMovies.filter(g => g !== genre)
  }

  applyFilters()
})

filterForm.addEventListener("input", applyFilters)

filterForm.addEventListener("reset", () => {
  genresToFilterMovies = []
  applyFilters()
})

favoriteBtn.addEventListener("click", () => {
  openFavoritesModal()
})

function openFavoritesModal() {
  const favorites = getFavoriteMovies()

  favoritesMovieList.innerHTML = ""

  if (favorites.length === 0) {
    favoritesMovieList.innerHTML = "<p>No favorite movies yet ⭐</p>"
  } else {
    favorites.forEach(movie => {
      favoritesMovieList.appendChild(createMovieItem(movie))
    })
  }

  favoritesModal.classList.remove("modal-hidden")
  overlay.classList.remove("modal-hidden")
}

function closeFavoritesModal() {
  favoritesModal.classList.add("modal-hidden")
  overlay.classList.add("modal-hidden")
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMovieModal()
    closeFavoritesModal()
  }
})

closeFavoritesBtn.addEventListener("click", closeFavoritesModal)
overlay.addEventListener("click", closeFavoritesModal)

function applyFilters() {
  let filteredMovies = [...movies]

  if (genresToFilterMovies.length > 0) {
    filteredMovies = filteredMovies.filter(movie =>
      genresToFilterMovies.some(genre => movie.Genre.includes(genre))
    )
  }

  const fromYear = Number(fromYearInput.value)
  const toYear = Number(toYearInput.value)
  const rating = Number(ratingInput.value)

  if (fromYear) {
    filteredMovies = filteredMovies.filter(
      movie => Number(movie.Year.slice(0, 4)) >= fromYear
    )
  }

  if (toYear) {
    filteredMovies = filteredMovies.filter(
      movie => Number(movie.Year.slice(0, 4)) <= toYear
    )
  }

  if (rating) {
    filteredMovies = filteredMovies.filter(
      movie => Number(movie.imdbRating) >= rating
    )
  }

  renderMovies(filteredMovies)
}

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
      <div class="movie-favorite-icon">
        <span class="favorite-icon">${getFavoriteIcon(movie.imdbID)}</span>
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

  li.querySelector(".favorite-icon").addEventListener("click", event => {
    event.stopPropagation()

    toggleFavoriteMovie(movie)

    event.currentTarget.innerHTML = getFavoriteIcon(movie.imdbID)
  })

  return li
}

function getFavoriteMovies() {
  return JSON.parse(localStorage.getItem("favoriteMovies")) ?? []
}

function isMovieAddedToFavorites(imdbID) {
  const favorites = getFavoriteMovies()
  return favorites.some(movie => movie.imdbID === imdbID)
}

function addMovieToFavorites(movie) {
  const favorites = getFavoriteMovies()

  if (favorites.some(item => item.imdbID === movie.imdbID)) {
    return
  }

  favorites.push(movie)
  localStorage.setItem("favoriteMovies", JSON.stringify(favorites))
}

function removeMovieFromFavorites(imdbID) {
  const favorites = getFavoriteMovies().filter(movie => movie.imdbID !== imdbID)

  localStorage.setItem("favoriteMovies", JSON.stringify(favorites))
}

function toggleFavoriteMovie(movie) {
  if (isMovieAddedToFavorites(movie.imdbID)) {
    removeMovieFromFavorites(movie.imdbID)
  } else {
    addMovieToFavorites(movie)
  }

  renderMovies(movies)
}

function getFavoriteIcon(imdbID) {
  return isMovieAddedToFavorites(imdbID)
    ? '<i class="fa-solid fa-xl fa-star"></i>'
    : '<i class="fa-regular fa-xl fa-star"></i>'
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
  modal.querySelector("[data-trailer]").href = getYoutubeLink(
    movie.Title,
    movie.Released
  )

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

function getYoutubeLink(title, release) {
  return `https://www.youtube.com/results?search_query=${title
    .toLowerCase()
    .split(" ")
    .join("+")}+${release}+trailer`
}
