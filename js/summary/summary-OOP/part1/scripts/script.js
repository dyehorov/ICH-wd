// 1.Создайте базовый класс Vehicle со свойствами brand и year. Добавьте метод start(), который выводит "Транспортное средство заводится". Создайте класс Motorcycle, наследующий Vehicle, с дополнительным свойством engineType (тип двигателя). Переопределите метод start() для вывода "Мотоцикл [brand] заводится с рыча".

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

// 2.Создайте базовый класс Shape со свойствами name и color. Добавьте метод describe(), который выводит "Это [color] фигура [name]". Создайте класс Circle, наследующий Shape, с дополнительным свойством radius. Переопределите метод describe() для вывода "Это [color] круг с радиусом [radius]".

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

// 3.Создайте базовый класс Gadget со свойствами model и price. Добавьте метод turnOn(). Создайте класс Smartphone, наследующий Gadget, с дополнительными свойствами os и cameraMp. Переопределите метод turnOn() для вывода "Смартфон [model] загружает систему [os]".

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

// 4.На основе вашего класса Account создайте класс CheckingAccount (Текущий счет). Добавьте свойство transactionFee (комиссия за операцию). Переопределите методы deposit() и withdraw() так, чтобы с каждой операцией списывалась комиссия (например, при снятии 100 со счета уйдет 100 + комиссия).

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

const account1 = new CheckingAccount(2322, 1000, 5)

console.log(account1)

account1.deposit(100)

console.log(account1)

account1.withdraw(100)

console.log(account1)

// 5.На основе вашего класса Library создайте класс RatedLibrary. Добавьте метод rateBook(title, rating), который добавляет рейтинг книге, и метод getTopRated(), который возвращает книги с рейтингом выше 4. Храните рейтинги в отдельном объекте/массиве.

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

const ratedLibrary1 = new RatedLibrary([])

ratedLibrary1.addBook("The Great Gatsby", "F. Scott Fitzgerald")
ratedLibrary1.addBook("To Kill a Mockingbird", "Harper Lee")

ratedLibrary1.rateBook("The Great Gatsby", 5)

console.log(ratedLibrary1)

console.log(ratedLibrary1.getTopRated())

// 6.На основе вашего класса User создайте класс ActiveUser. Добавьте свойство lastLogin (дата последнего входа) и метод updateLogin() для обновления этой даты. Также добавьте метод getDaysSinceLastLogin(), который возвращает сколько дней прошло с последнего входа.

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

const user = new ActiveUser("Bob", 23, new Date())
console.log(user)

console.log(user.getDaysSinceLastLogin())

// 7.На основе вашего класса Animal создайте класс Cat. Добавьте свойства color (цвет) и isIndoor (домашняя ли кошка). Создайте метод meow(), который выводит "Мяу!", и метод getDescription(), который возвращает строку типа "Белый домашний кот по имени Барсик".

class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
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

cat.meow()
console.log(cat.getDescription())

// 8.На основе вашего класса Admin создайте класс SuperAdmin. Добавьте свойство permissions (массив строк прав, например ['delete_users', 'edit_roles']). Добавьте методы addPermission(perm) и hasPermission(perm), который проверяет наличие конкретного права.

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

const superAdmin = new SuperAdmin("Jack", 27, "Admin", [])

superAdmin.addPermission("delete_users")
superAdmin.addPermission("add_users")

console.log(superAdmin)

console.log(superAdmin.hasPermission("add_users"))

// 9.На основе вашего класса SavingsAccount создайте класс LimitedSavingsAccount. Добавьте свойство withdrawalLimit (лимит снятия в месяц). Переопределите метод withdraw() так, чтобы он проверял, не превышен ли лимит снятий за текущий месяц.

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

const limitedSavingsAccount = new LimitedSavingsAccount(422, 1000, 5, 1500)

limitedSavingsAccount.withdraw(2000)
limitedSavingsAccount.withdraw(500)
limitedSavingsAccount.withdraw(500)
limitedSavingsAccount.withdraw(500)

// 10.Создайте базовый класс Product со свойствами name, price, quantity. Добавьте методы getTotalCost() и applyDiscount(percent). Создайте класс FoodProduct, наследующий Product, с дополнительными свойствами expiryDate и category. Добавьте метод isExpired().

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

const foodProduct = new FoodProduct("Egg", 4.99, 10, "2.12.2025", "food")

console.log(foodProduct)

console.log(foodProduct.isExpired())

// 11.Создайте базовый класс Course со свойствами title, durationHours, students (массив имен). Добавьте методы addStudent(name) и getStudentCount(). Создайте класс PaidCourse, наследующий Course, с дополнительными свойствами price и discount. Добавьте метод getFinalPrice().

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

const paidCourse = new PaidCourse("React", 68, [], 250, 15)

paidCourse.addStudent("Jonh")
paidCourse.addStudent("Carl")
paidCourse.addStudent("Tom")
console.log(paidCourse)
console.log(paidCourse.getStudentCount())

console.log(paidCourse.getFinalPrice())

// 12.Создайте базовый класс Character со свойствами name, health, level. Добавьте методы takeDamage(amount) и heal(amount). Создайте класс Warrior, наследующий Character, с дополнительными свойствами strength и armor. Переопределите метод takeDamage() с учетом брони.

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

const warrior = new Warrior("Witcher", 100, 5, 25, 100)

warrior.takeDamage(120)
warrior.takeDamage(120)

console.log(warrior)

// 13. Создайте базовый класс Movie со свойствами title, duration, genre. Добавьте метод getInfo(). Создайте класс MovieSession, наследующий Movie, с дополнительными свойствами time, hallNumber, ticketPrice. Добавьте методы calculateRevenue(audienceCount) и isFullHall(audienceCount).

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

console.log(movie)

console.log(movie.calculateRevenue(50))
console.log(movie.isFullHall(99))

// 14.Создайте базовый класс Athlete со свойствами name, country, personalRecord. Добавьте метод train(hours), который увеличивает personalRecord. Создайте класс Sprinter, наследующий Athlete, с дополнительным свойством speed. Добавьте метод compete(opponentSpeed) который сравнивает скорости.

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

const athlete = new Sprinter("James", "Germany", 100, 30)

athlete.train(20)
console.log(athlete)

console.log(athlete.compete(30))

// 15. Создайте базовый класс SmartDevice со свойствами name, isOn, consumption. Добавьте методы togglePower() и getDailyConsumption(hours). Создайте класс SmartThermostat, наследующий SmartDevice, с дополнительными свойствами currentTemp и targetTemp. Добавьте методы setTemperature(temp) и getEnergyEfficiency().

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

const thermostat = new SmartThermostat("Thermostat", true, 2, 20, 22)

thermostat.togglePower()
console.log("Daily:", thermostat.getDailyConsumption(5))
thermostat.togglePower()
thermostat.setTemperature(21)
console.log("Efficiency:", thermostat.getEnergyEfficiency())

// 16.Создайте базовый класс Employee → наследуйте Manager → наследуйте SeniorManager. Каждый уровень добавляет новые свойства и методы, а также расширяет существующие. Например: Employee (name, salary), Manager (department, team), SeniorManager (budget, approveExpenses()).

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

const emp1 = new Employee("John", 50000)
console.log(emp1.getInfo())

const manager = new Manager("Anna", 90000, "Development", [])
manager.addTeamMember(emp1)
console.log(manager.getTeamInfo())

const senior = new SeniorManager("Bob", 150000, "IT", [emp1], 100000)
console.log(senior.getBudgetInfo())
senior.approveExpenses(30000)
console.log(senior.getBudgetInfo())
