function getCurrentDate() {
  const date = new Date()

  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

function getCurrentTime() {
  const date = new Date()

  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

module.exports = {
  getCurrentDate,
  getCurrentTime,
}
