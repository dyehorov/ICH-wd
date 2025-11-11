console.log("========Задание 1========")

// 1. Создайте систему управления бронированиями:
const bookings = [
  { guest: "Alice", room: 101, nights: 3, total: 300, status: "confirmed" },
  { guest: "Bob", room: 102, nights: 5, total: 500, status: "pending" },
  { guest: "Charlie", room: 103, nights: 2, total: 200, status: "confirmed" },
]
// Функция 1: Используя map, добавить стоимость за ночь для каждого бронирования
console.log("Add price per night")

function addPricePerNight(array) {
  return array.map((item) => {
    return { ...item, pricePerNight: item.total / item.nights }
  })
}

console.log(addPricePerNight(bookings))

// Функция 2: Используя filter, найти подтвержденные бронирования больше чем на 2 ночи

console.log("Get long confirmed bookings")

function getLongConfirmedBookings(array) {
  return array.filter(
    ({ nights, status }) => nights > 2 && status === "confirmed"
  )
}

console.log(getLongConfirmedBookings(bookings))

// Функция 3: Используя reduce, вычислить общий доход от confirmed бронирований
console.log("Total from confirmed bookings")

function getTotalConfirmedRevenue(array) {
  return array.reduce((accum, item) => {
    if (item.status === "confirmed") {
      return (accum += item.total)
    }

    return accum
  }, 0)
}

console.log(getTotalConfirmedRevenue(bookings))

console.log("========Задание 2========")

// 2. Создайте систему для работы с постами и пользователями:
const users = [
  { username: "alice2023", posts: 15, followers: 230, isVerified: true },
  { username: "bob_developer", posts: 8, followers: 85, isVerified: false },
  { username: "charlie_tech", posts: 22, followers: 450, isVerified: true },
]

// Функция 1: Используя map, добавить engagement rate (followers/posts) для каждого пользователя

console.log("Get engagement rate")

function calculateEngagement(array) {
  return array.map((item) => {
    return {
      ...item,
      engagementRate: Math.floor((item.followers / item.posts) * 10) / 10,
    }
  })
}

console.log(calculateEngagement(users))

// Функция 2: Используя filter, найти верифицированных пользователей с более чем 100 followers
console.log("Get verified and with more than 100 followers users")

function getInfluencers(array) {
  return array.filter(
    ({ isVerified, followers }) => followers > 100 && isVerified
  )
}

console.log(getInfluencers(users))

// Функция 3: Используя forEach, добавить уровень популярности (low/medium/high)

console.log("Assign popularity level")

function assignPopularityLevel(array) {
  array.forEach((item) => {
    if (item.followers < 100) {
      item.populatiry = "low"
    } else if (item.followers > 100 && item.followers < 300) {
      item.populatiry = "medium"
    } else {
      item.popularity = "high"
    }
  })
}

assignPopularityLevel(users)

console.log(users)
