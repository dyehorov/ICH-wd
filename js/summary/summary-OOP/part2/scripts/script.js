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

// 3. К классу Product добавьте статические методы:
// isValidName(name) - проверяет, что имя не пустое и длиннее 2 символов
// isValidPrice(price) - проверяет, что цена положительная
// isValidQuantity(quantity) - проверяет, что количество целое и неотрицательное
// Используйте эти методы в конструкторе класса для проверки входных данных.

// 4. К классу Account добавьте:
// Статическое свойство exchangeRates, хранящее курс валют (например, {USD: 1, EUR: 0.92, GBP: 0.75 })
// Статический метод convert(amount, fromCurrency, toCurrency), который конвертирует сумму
// Статический метод setExchangeRate(currency, rate) для обновления курса

// 5. Создайте класс Order. Добавьте:
// Статическое свойство lastOrderNumber
// Статический метод generateOrderNumber(), который генерирует номер заказа в формате "ORD-YYYY-MMDD-XXXX" (XXXX - последовательный номер)
// При создании заказа автоматически присваивайте сгенерированный номер

// 6. Модифицируйте класс Vehicle. Добавьте статические фабричные методы:
// createCar(brand, year, doors) - создает автомобиль
// createMotorcycle(brand, year, type) - создает мотоцикл
// createTruck(brand, year, capacity) - создает грузовик
// Каждый метод возвращает соответствующий экземпляр с предустановленными значениями типа транспорта.

// 7. К классу User добавьте статические методы:
// createCustomer(name, age, email) - создает обычного пользователя
// createAdmin(name, age, accessLevel) - создает администратора
// createModerator(name, age, section) - создает модератора
// Каждый метод настраивает дополнительные свойства в зависимости от роли.

// 8. К классу Account добавьте:
// Статическое свойство allAccounts (массив всех созданных счетов)
// Статический метод getTotalBalance() - возвращает общий баланс всех счетов
// Статический метод getAverageBalance() - возвращает средний баланс
// Статический метод findAccountById(id) - ищет счет по ID

// 9. К классу Library добавьте статические методы:
// filterByGenre(books, genre) - фильтрует массив книг по жанру
// sortByYear(books) - сортирует книги по году издания
// getOldestBook(books) - находит самую старую книгу

// 10. Создайте класс Product и добавьте статические свойства и методы для системы скидок:
// Статическое свойство promoCodeDiscounts (объект с промокодами и размерами скидок)
// Статическое свойство holidayDiscount (праздничная скидка)
// Статический метод applyPromoCode(code) - применяет промокод к цене
// Статический метод calculateHolidayPrice(price) - применяет праздничную скидку
// Статический метод getBestDiscount(price, code) - выбирает лучшую скидку для клиента

// 11\*. Создайте класс WeatherService с:
// Статическим свойством cache (хранит результаты предыдущих запросов)
// Статическим свойством cacheTime (время жизни кэша в миллисекундах)
// Статическим методом getWeather(city) - если результат есть в кэше и он свежий, возвращает его, иначе делает "запрос" (симуляцию) и сохраняет в кэш
// Статическим методом clearCache() - очищает кэш
// Статическим методом getCacheStats() - возвращает статистику по кэшу

class Vehicle {
  constructor(brand, year) {
    this.brand = brand
    this.year = year
  }

  start() {
    console.log("Vehicle starting...")
  }
}

class Motorcycle extends Vehicle {
  constructor(brand, year, engineType) {
    super(brand, year)
    this.engineType = engineType
  }

  start() {
    console.log(`Motorcycle ${this.brand} starts via a kickstarter.`)
  }
}

class Shape {
  constructor(name, color) {
    this.name = name
    this.color = color
  }

  describe() {
    console.log(`This is a ${this.color} ${this.name}`)
  }
}

class Circle extends Shape {
  constructor(name, color, radius) {
    super(name, color)
    this.radius = radius
  }

  describe() {
    console.log(
      `This is ${this.color} ${this.name} with a radius of ${this.radius}`
    )
  }
}

class Gadget {
  constructor(model, price) {
    this.model = model
    this.price = price
  }

  turnOn() {
    console.log("The gadget is turning on...")
  }
}

class Smartphone extends Gadget {
  constructor(model, price, os, cameraMp) {
    super(model, price)
    this.os = os
    this.cameraMp = cameraMp
  }

  turnOn() {
    console.log(
      `The smartphone ${this.model} is loading the ${this.os} system.`
    )
  }
}

class Account {
  constructor(id, balance) {
    this.id = id
    this.balance = balance
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

class CheckingAccount extends Account {
  constructor(id, balance, transactionFee) {
    super(id, balance)
    this.transactionFee = transactionFee
  }

  deposit(value) {
    super.deposit(value)
    this.balance -= this.transactionFee
  }

  withdraw(value) {
    if (value + this.transactionFee <= this.balance) {
      this.balance -= value
      this.balance -= this.transactionFee
    } else {
      console.log("Not enough money for this withdrawal including the fee")
    }
  }
}

class Library {
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

class RatedLibrary extends Library {
  constructor(books) {
    super(books)
  }

  rateBook(title, rating) {
    const book = this.books.find(book => book.title === title)

    if (!book) {
      console.log("Book not found")
      return
    }

    book.rating = rating
  }

  getTopRated() {
    const booksWithRatingHigherThan4 = this.books.filter(
      book => book.rating > 4
    )
    return booksWithRatingHigherThan4
  }
}

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  displayInfo() {
    console.log(`User name: ${this.name}, User age: ${this.age}`)
  }
}

class ActiveUser extends User {
  constructor(name, age, lastLogin) {
    super(name, age)
    this.lastLogin = lastLogin
  }

  updateLogin() {
    this.lastLogin = new Date()
  }

  getDaysSinceLastLogin() {
    const currentDate = new Date()
    return Math.floor((currentDate - this.lastLogin) / (1000 * 60 * 60 * 24))
  }
}

class Cat extends Animal {
  constructor(name, type, color, isIndoor) {
    super(name, type)
    this.color = color
    this.isIndoor = isIndoor
  }

  meow() {
    console.log("Meow!")
  }

  getDescription() {
    if (this.isIndoor) {
      return `${this.color} indoor cat named ${this.name}`
    }

    return `${this.color} outdoor cat named ${this.name}`
  }
}

const cat = new Cat("Barsik", "Cat", "Brown", true)

class Admin extends User {
  constructor(name, age, role) {
    super(name, age)
    this.role = role
  }

  displayRole() {
    console.log(`${this.name}'s role is ${this.role}`)
  }
}

class SuperAdmin extends Admin {
  constructor(name, age, role, permissions) {
    super(name, age, role)
    this.permissions = permissions
  }

  addPermission(perm) {
    this.permissions.push(perm)
  }

  hasPermission(perm) {
    const findPermission = this.permissions.find(
      permission => permission === perm
    )

    if (!findPermission) return `No such permission: ${perm}`

    return `Admin has such permission: ${perm}`
  }
}

class SavingsAccount extends Account {
  constructor(id, balance, interestRate) {
    super(id, balance)
    this.interestRate = interestRate
  }

  addInterest() {
    const interest = this.balance * (this.interestRate / 100)
    this.balance += interest
  }
}

class LimitedSavingsAccount extends SavingsAccount {
  constructor(id, balance, interestRate, withdrawalLimit) {
    super(id, balance, interestRate)
    this.withdrawalLimit = withdrawalLimit
  }

  withdraw(value) {
    if (value > this.withdrawalLimit) {
      console.log(
        `You have exceeded your monthly withdrawal limit. Your limit is ${this.withdrawalLimit}.`
      )
      return
    }

    if (value > this.balance) {
      console.log("Not enough money on your balance.")
      return
    }

    super.withdraw(value)
    this.withdrawalLimit -= value

    console.log(
      `Successfully withdrew ${value}. Your balance is ${this.balance}. Your remaining withdrawal limit is ${this.withdrawalLimit}.`
    )
  }
}

class Product {
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

class FoodProduct extends Product {
  constructor(name, price, quantity, expiryDate, category) {
    super(name, price, quantity)
    this.expiryDate = new Date(expiryDate)
    this.category = category
  }

  isExpired() {
    const today = new Date()
    return today > this.expiryDate
  }
}

class Course {
  constructor(title, durationHours, students = []) {
    this.title = title
    this.durationHours = durationHours
    this.students = students
  }

  addStudent(name) {
    this.students.push(name)
  }

  getStudentCount() {
    return this.students.length
  }
}

class PaidCourse extends Course {
  constructor(title, durationHours, students, price, discount) {
    super(title, durationHours, students)
    this.price = price
    this.discount = discount
  }

  getFinalPrice() {
    return this.price - this.price * (this.discount / 100)
  }
}

class Character {
  constructor(name, health, level) {
    this.name = name
    this.health = health
    this.level = level
  }

  takeDamage(amount) {
    this.health -= amount

    if (this.health <= 0) {
      this.health = 0
      console.log(`${this.name} is dead`)
    }
  }

  heal(amount) {
    this.health += amount
  }
}

class Warrior extends Character {
  constructor(name, health, level, strength, armor) {
    super(name, health, level)
    this.strength = strength
    this.armor = armor
  }

  takeDamage(amount) {
    let damageLeft = amount

    if (this.armor > 0) {
      if (this.armor >= damageLeft) {
        this.armor -= damageLeft

        return
      } else {
        damageLeft -= this.armor
        this.armor = 0
      }
    }

    super.takeDamage(damageLeft)
  }
}

class Movie {
  constructor(title, duration, genre) {
    this.title = title
    this.duration = duration
    this.genre = genre
  }

  getInfo() {
    console.log(
      `Movie title: ${this.title}, Duration: ${this.duration}, Genre: ${this.genre}`
    )
  }
}

class MovieSession extends Movie {
  constructor(
    title,
    duration,
    genre,
    time,
    hallNumber,
    hallCapacity,
    ticketPrice
  ) {
    super(title, duration, genre)
    this.time = time
    this.hallNumber = hallNumber
    this.hallCapacity = hallCapacity
    this.ticketPrice = ticketPrice
  }

  calculateRevenue(audienceCount) {
    return this.ticketPrice * audienceCount
  }

  isFullHall(audienceCount) {
    if (this.hallCapacity <= audienceCount) {
      return true
    } else {
      return false
    }
  }
}

const movie = new MovieSession(
  "Harry Potter",
  120,
  "Fantasy",
  "12:00",
  9,
  70,
  15
)

class Athlete {
  constructor(name, country, personalRecord) {
    this.name = name
    this.country = country
    this.personalRecord = personalRecord
  }

  train(hours) {
    this.personalRecord += hours / 10
  }
}

class Sprinter extends Athlete {
  constructor(name, country, personalRecord, speed) {
    super(name, country, personalRecord)
    this.speed = speed
  }

  compete(opponentSpeed) {
    if (this.speed < opponentSpeed) {
      return `Opponent is faster than ${this.name}`
    } else if (this.speed > opponentSpeed) {
      return `Opponent is slower than ${this.name}`
    }

    return `Opponent and ${this.name} are at the same speed`
  }
}

class SmartDevice {
  constructor(name, isOn, consumption) {
    this.name = name
    this.isOn = isOn
    this.consumption = consumption
  }

  togglePower() {
    if (this.isOn) {
      console.log(`${this.name} is now "ON"`)
    } else {
      console.log(`${this.name} is now "OFF"`)
    }

    this.isOn = !this.isOn
  }

  getDailyConsumption(hours) {
    return this.isOn ? this.consumption * hours : 0
  }
}

class SmartThermostat extends SmartDevice {
  constructor(name, isOn, consumption, currentTemp, targetTemp) {
    super(name, isOn, consumption)
    this.currentTemp = currentTemp
    this.targetTemp = targetTemp
  }

  setTemperature(temp) {
    this.targetTemp = temp
    console.log(`${this.name} target temperature set to ${this.targetTemp}°C`)
  }

  getEnergyEfficiency() {
    const temperatureDifference = this.targetTemp - this.currentTemp

    if (temperatureDifference < 0)
      return `Current temperature (${this.currentTemp}) is higher than target (${this.targetTemp}), no energy needed`

    if (temperatureDifference === 0)
      return `Thermostat reached target temperature (${this.targetTemp}. High efficiency)`
    if (temperatureDifference >= 10)
      return `Thermostat reached target temperature (${this.targetTemp}. Low efficiency) `
    return 1 - temperatureDifference * 0.09
  }
}

class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  getInfo() {
    return `Employee: ${this.name}, salary: ${this.salary}`
  }
}

class Manager extends Employee {
  constructor(name, salary, department, team) {
    super(name, salary)
    this.department = department
    this.team = team
  }

  addTeamMember(member) {
    this.team.push(member)
    console.log(`${member.name} has been added to ${this.name}'s team.`)
  }

  getTeamInfo() {
    return `Manager ${this.name} leads the "${this.department}" department with ${this.team.length} team members.`
  }
}

class SeniorManager extends Manager {
  constructor(name, salary, department, team, budget) {
    super(name, salary, department, team)
    this.budget = budget
  }

  approveExpenses(amount) {
    if (amount <= this.budget) {
      console.log(`${this.name} approved an expense of ${amount}.`)
      this.budget -= amount
    } else {
      console.log(`${this.name} cannot approve ${amount}; insufficient budget.`)
    }
  }

  getBudgetInfo() {
    return `Senior Manager ${this.name} has a remaining budget of: ${this.budget}`
  }
}
