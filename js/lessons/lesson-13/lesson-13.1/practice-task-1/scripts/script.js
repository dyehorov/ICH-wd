const body = document.querySelector("body")
const themeSwitcherBtn = document.querySelector(".themeSwitcher")

window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme") || "light"
  if (theme === "dark") {
    body.classList.add("dark-theme")
  }
})

themeSwitcherBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme")
  const isDarkTheme = body.classList.contains("dark-theme")
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light")
})
