// 1. Модифицируйте ваш класс Animal. Добавьте статическое свойство totalAnimals, которое будет отслеживать общее количество созданных животных. При создании нового экземпляра класса (в конструкторе) увеличивайте это значение на 1. Добавьте статический метод getTotal(), который возвращает общее количество животных.

class Animal {
  static totalAnimals = 0

  constructor(name, type) {
    this.name = name
    this.type = type
    Animal.totalAnimals++
  }

  static getTotal() {
    console.log(`Total number of animals - ${Animal.totalAnimals}`)
  }
}

const animal1 = new Animal("Barsik", "Cat")
const animal2 = new Animal("Rio", "Parrot")

Animal.getTotal()

// 2. Модифицируйте класс User. Добавьте статическое свойство nextId, которое будет хранить следующий доступный ID. При создании нового пользователя автоматически присваивайте ему уникальный ID из этого свойства и увеличивайте nextId на 1 для следующего пользователя. Добавьте свойство id в экземпляры.

// class User {
//   static nextId = 1

//   constructor(name, age) {
//     this.name = name
//     this.age = age
//     this.id = User.nextId
//     User.nextId++
//   }

//   displayInfo() {
//     console.log(`User name: ${this.name}, User age: ${this.age}`)
//   }
// }

// const user1 = new User("John", 22)
// const user2 = new User("Max", 21)
// const user3 = new User("Carl", 25)

// console.log(user1)
// console.log(user2)
// console.log(user3)

// 3. К классу Product добавьте статические методы:
// isValidName(name) - проверяет, что имя не пустое и длиннее 2 символов
// isValidPrice(price) - проверяет, что цена положительная
// isValidQuantity(quantity) - проверяет, что количество целое и неотрицательное
// Используйте эти методы в конструкторе класса для проверки входных данных.

// class Product {
//   static isValidName(name) {
//     return name.trim().length > 2
//   }

//   static isValidPrice(price) {
//     return price > 0
//   }

//   static isValidQuantity(quantity) {
//     return quantity > 0 && Number.isInteger(quantity)
//   }

//   constructor(name, price, quantity) {
//     this.name = name
//     this.price = price
//     this.quantity = quantity
//   }

//   getTotalCost() {
//     return this.quantity * this.price
//   }

//   applyDiscount(percent) {
//     return this.getTotalCost() - this.getTotalCost() * (percent / 100)
//   }
// }

// const product = new Product("Eggs", 5.99, 4)

// console.log(Product.isValidName(product.name))
// console.log(Product.isValidPrice(product.price))
// console.log(Product.isValidQuantity(product.quantity))

// 4. К классу Account добавьте:
// Статическое свойство exchangeRates, хранящее курс валют (например, {USD: 1, EUR: 0.92, GBP: 0.75 })
// Статический метод convert(amount, fromCurrency, toCurrency), который конвертирует сумму
// Статический метод setExchangeRate(currency, rate) для обновления курса

// class Account {
//   static exchangeRates = { USD: 1, EUR: 0.92, GBP: 0.75 }

//   static convert(amount, fromCurrency, toCurrency) {
//     const amountInUSD = amount / Account.exchangeRates[fromCurrency]

//     return (
//       Math.floor(amountInUSD * Account.exchangeRates[toCurrency] * 100) / 100
//     )
//   }

//   static setExchangeRate(currency, rate) {
//     if (rate <= 0) {
//       console.log("Rate must be positive")
//     }
//     Account.exchangeRates[currency] = rate
//   }

//   constructor(id, balance) {
//     this.id = id
//     this.balance = balance
//   }

//   deposit(value) {
//     if (value > 0) {
//       this.balance += value
//     } else {
//       console.log("Enter non negative number")
//     }
//   }

//   withdraw(value) {
//     if (value <= this.balance) {
//       this.balance -= value
//     } else {
//       console.log("Not enough money on your balance")
//     }
//   }
// }

// console.log(Account.convert(100, "EUR", "GBP")) // ~81.52

// Account.setExchangeRate("EUR", 0.95)
// console.log(Account.convert(100, "EUR", "USD")) // ~105.26

// 5. Создайте класс Order. Добавьте:
// Статическое свойство lastOrderNumber
// Статический метод generateOrderNumber(), который генерирует номер заказа в формате "ORD-YYYY-MMDD-XXXX" (XXXX - последовательный номер)
// При создании заказа автоматически присваивайте сгенерированный номер

class Order {
  static lastOrderNumber = 0o0

  static generateOrderNumber() {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const day = String(now.getDate()).padStart(2, "0")
    const orderNumber = String(++Order.lastOrderNumber).padStart(4, "0")

    return `ORD-${year}-${month}${day}-${orderNumber}`
  }
}

console.log(Order.generateOrderNumber())
console.log(Order.generateOrderNumber())
console.log(Order.generateOrderNumber())

// 6. Модифицируйте класс Vehicle. Добавьте статические фабричные методы:
// createCar(brand, year, doors) - создает автомобиль
// createMotorcycle(brand, year, type) - создает мотоцикл
// createTruck(brand, year, capacity) - создает грузовик
// Каждый метод возвращает соответствующий экземпляр с предустановленными значениями типа транспорта.

class Vehicle {
  constructor(brand, year, type, extra) {
    this.brand = brand
    this.year = year
    this.type = type
    this.extra = extra
  }

  static createCar(brand, year, doors) {
    return new Vehicle(brand, year, "car", { doors })
  }

  static createMotorcycle(brand, year, motoType) {
    return new Vehicle(brand, year, "motorcycle", { type: motoType })
  }

  static createTruck(brand, year, capacity) {
    return new Vehicle(brand, year, "truck", { capacity })
  }

  start() {
    console.log(`${this.type} starting...`)
  }
}

const car = Vehicle.createCar("Toyota", 2018, 4)
console.log(car)

const moto = Vehicle.createMotorcycle("Yamaha", 2022, "sport")
console.log(moto)

const truck = Vehicle.createTruck("MAN", 2020, 120000)
console.log(truck)

// 7. К классу User добавьте статические методы:
// createCustomer(name, age, email) - создает обычного пользователя
// createAdmin(name, age, accessLevel) - создает администратора
// createModerator(name, age, section) - создает модератора
// Каждый метод настраивает дополнительные свойства в зависимости от роли.

class User {
  static nextId = 1

  static createCustomer(name, age, email) {
    return new User(name, age, {
      role: "customer",
      email: email,
    })
  }

  static createAdmin(name, age, accessLevel) {
    return new User(name, age, {
      role: "admin",
      accessLevel: accessLevel,
    })
  }

  static createModerator(name, age, section) {
    return new User(name, age, {
      role: "moderator",
      section: section,
    })
  }

  constructor(name, age, extra) {
    this.name = name
    this.age = age
    this.id = User.nextId
    this.extra = extra
    User.nextId++
  }

  displayInfo() {
    console.log(`User name: ${this.name}, User age: ${this.age}`)
  }
}

const user1 = User.createCustomer("John", 22, "john@gmail.com")
const admin1 = User.createAdmin("Alice", 30, "full")
const mod1 = User.createModerator("Bob", 25, "sports")

console.log(user1)
console.log(admin1)
console.log(mod1)

// 8. К классу Account добавьте:
// Статическое свойство allAccounts (массив всех созданных счетов)
// Статический метод getTotalBalance() - возвращает общий баланс всех счетов
// Статический метод getAverageBalance() - возвращает средний баланс
// Статический метод findAccountById(id) - ищет счет по ID

class Account {
  static exchangeRates = { USD: 1, EUR: 0.92, GBP: 0.75 }
  static allAccounts = []

  static getTotalBalance() {
    return this.allAccounts.reduce((accum, item) => accum + item.balance, 0)
  }
  static getAverageBalance(...balances) {
    if (Account.allAccounts.length === 0) return 0

    return this.getTotalBalance() / this.allAccounts.length
  }

  static findAccountById(id) {
    return this.allAccounts.find(item => item.id === id)
  }

  static convert(amount, fromCurrency, toCurrency) {
    const amountInUSD = amount / Account.exchangeRates[fromCurrency]

    return (
      Math.floor(amountInUSD * Account.exchangeRates[toCurrency] * 100) / 100
    )
  }

  static setExchangeRate(currency, rate) {
    if (rate <= 0) {
      console.log("Rate must be positive")
    }
    Account.exchangeRates[currency] = rate
  }

  constructor(id, balance) {
    this.id = id
    this.balance = balance
    Account.allAccounts.push(this)
  }

  deposit(value) {
    if (value > 0) {
      this.balance += value
    } else {
      console.log("Enter non negative number")
    }
  }

  withdraw(value) {
    if (value <= this.balance) {
      this.balance -= value
    } else {
      console.log("Not enough money on your balance")
    }
  }
}

const account1 = new Account(1, 500)
const account2 = new Account(2, 200)
const account3 = new Account(3, 300)

console.log(Account.getTotalBalance())
console.log(Account.getAverageBalance())
console.log(Account.findAccountById(2))

// 9. К классу Library добавьте статические методы:
// filterByGenre(books, genre) - фильтрует массив книг по жанру
// sortByYear(books) - сортирует книги по году издания
// getOldestBook(books) - находит самую старую книгу

class Library {
  static filterByGenre(books, genre) {
    return books.filter(item => item.genre === genre)
  }
  static sortByYear(books) {
    return books.sort((a, b) => a.year - b.year)
  }
  static getOldestBook(books) {
    if (books.length === 0) return null

    return books.reduce(
      (accum, book) => {
        if (accum.year > book.year) {
          accum = book

          return accum
        }

        return accum
      },
      { year: +Infinity }
    )
  }

  constructor(books) {
    this.books = books
  }

  addBook(titleName, authorName) {
    this.books.push({ title: titleName, author: authorName })
  }

  removeBook(titleName) {
    return (this.books = this.books.filter(item => item.title !== titleName))
  }
}

const books = [
  { title: "1984", author: "George Orwell", genre: "dystopia", year: 1949 },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "dystopia",
    year: 1932,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "fantasy",
    year: 1937,
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "dystopia",
    year: 1953,
  },
]

console.log("Filter by genre")
console.log(Library.filterByGenre(books, "dystopia"))
console.log("Sort by year")
console.log(Library.sortByYear(books))
console.log("Oldest book")
console.log(Library.getOldestBook(books))

// 10. Создайте класс Product и добавьте статические свойства и методы для системы скидок:
// Статическое свойство promoCodeDiscounts (объект с промокодами и размерами скидок)
// Статическое свойство holidayDiscount (праздничная скидка)
// Статический метод applyPromoCode(code) - применяет промокод к цене
// Статический метод calculateHolidayPrice(price) - применяет праздничную скидку
// Статический метод getBestDiscount(price, code) - выбирает лучшую скидку для клиента

class Product {
  static isValidName(name) {
    return name.trim().length > 2
  }

  static isValidPrice(price) {
    return price > 0
  }

  static isValidQuantity(quantity) {
    return quantity > 0 && Number.isInteger(quantity)
  }

  static promoCodeDiscounts = {
    promoCode10: 10,
    promoCode20: 20,
    promoCode30: 30,
  }

  static holidayDiscount = 15

  static applyPromoCode(price, code) {
    return price - (price * Product.promoCodeDiscounts[code]) / 100
  }

  static calculateHolidayPrice(price) {
    return price - (price * Product.holidayDiscount) / 100
  }

  static getBestDiscount(price, code) {
    const priceWithPromoCode = Product.applyPromoCode(price, code)

    const priceWithHoliday = Product.calculateHolidayPrice(price)

    return priceWithPromoCode < priceWithHoliday
      ? priceWithPromoCode
      : priceWithHoliday
  }

  constructor(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }

  getTotalCost() {
    return this.quantity * this.price
  }

  applyDiscount(percent) {
    return this.getTotalCost() - this.getTotalCost() * (percent / 100)
  }
}

const price = 1000

console.log(Product.applyPromoCode(price, "promoCode10"))
console.log(Product.calculateHolidayPrice(price))
console.log(Product.getBestDiscount(price, "promoCode10"))
console.log(Product.getBestDiscount(price, "promoCode30"))

// 11\*. Создайте класс WeatherService с:
// Статическим свойством cache (хранит результаты предыдущих запросов)
// Статическим свойством cacheTime (время жизни кэша в миллисекундах)
// Статическим методом getWeather(city) - если результат есть в кэше и он свежий, возвращает его, иначе делает "запрос" (симуляцию) и сохраняет в кэш
// Статическим методом clearCache() - очищает кэш
// Статическим методом getCacheStats() - возвращает статистику по кэшу

class WeatherService {
  static cache =
    "Munich is currently cold, misty, and cloudy with temperatures around 4°C"
  static cacheTime = 20000
  static getWeather(city) {
    if (this.cache !== "" && this.cacheTime) {
      return this.cache
    }

    this.cache = `${city} is currently cold, misty, and cloudy with temperatures around 4°C`

    return this.cache
  }
  static clearCache() {
    this.cache = ""
  }
  static getCacheStats() {
    return `Cache: ${this.cache}, cacheTime: ${this.cacheTime}`
  }
}

console.log(WeatherService.getWeather("London"))

WeatherService.clearCache()
console.log(WeatherService.getCacheStats())

console.log(WeatherService.getWeather("London"))
console.log(WeatherService.getCacheStats())
