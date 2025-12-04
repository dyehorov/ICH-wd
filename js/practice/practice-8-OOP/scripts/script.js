// Задача 1
// ●  Создайте класс Circle, который принимает радиус при создании.
// ●  У класса должен быть метод getArea(), который возвращает площадь круга.
// ●  У класса также должен быть метод getCircumference(), который возвращает длину окружности круга.
// ●  Создайте экземпляр класса и выведите результаты вызова методов.

// class Circle {
//   constructor(radius) {
//     this.radius = radius
//   }

//   getArea() {
//     return Math.floor(Math.PI * this.radius ** 2)
//   }

//   getCircumference() {
//     return Math.floor(Math.PI * (this.radius * 2))
//   }
// }

// const circle = new Circle(10)

// console.log(circle.getArea())
// console.log(circle.getCircumference())

// Задача 2
// ●  Создайте класс Rectangle, который принимает ширину и высоту при создании.
// ●  У класса должен быть метод getArea(), который возвращает площадь прямоугольника.
// ●  У класса также должен быть метод getPerimeter(), который возвращает периметр прямоугольника.
// ●  Создайте экземпляр класса и выведите результаты вызова методов.

// class Rectangle {
//   constructor(width, height) {
//     this.width = width
//     this.height = height
//   }

//   getArea() {
//     return this.width * this.height
//   }

//   getPerimeter() {
//     return this.width * 2 + this.height * 2
//   }
// }

// const rectangle = new Rectangle(5, 10)

// console.log(rectangle.getArea())
// console.log(rectangle.getPerimeter())

// Задача 3
// ●  Создайте класс Shape, у которого есть метод calculateArea().
// ●  Создайте два наследника класса Shape: Rectangle и Circle.
// ●  У каждого наследника должен быть свой метод calculateArea(), который переопределяет метод родительского класса.
// ●  Создайте экземпляры классов Rectangle и Circle и вызовите их методы calculateArea().

class Shape {
  calculateArea() {}
}

class Rectangle extends Shape {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }

  calculateArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }

  calculateArea() {
    return Math.floor(Math.PI * this.radius ** 2)
  }
}

const circle = new Circle(5)
const rectangle = new Rectangle(5, 10)

console.log(circle.calculateArea())
console.log(rectangle.calculateArea())

// Задача 4
// ●  Создайте класс Transport, у которого есть метод move().
// ●  Создайте два наследника класса Transport: Car и Bicycle.
// ●  У каждого наследника должен быть свой метод move(), который переопределяет метод родительского класса.
// ●  Создайте экземпляры классов Car и Bicycle и вызовите их методы move().

// class Transport {
//   move() {
//     console.log("Moving")
//   }
// }

// class Car extends Transport {
//   move() {
//     console.log("Car is moving")
//   }
// }

// class Bicycle extends Transport {
//   move() {
//     console.log("Bicycle is moving")
//   }
// }

// const car = new Car()
// const bicycle = new Bicycle()

// car.move()
// bicycle.move()

// Задача 5
// ●  Создайте класс Person, который имеет свойство name.
// ●  Используйте геттер и сеттер для доступа к свойству name.
// ●  При попытке установить пустое имя сеттер должен вывести сообщение об ошибке.
// ●  Создайте экземпляр класса, установите имя и выведите имя с помощью геттера.

class Person {
  constructor(name) {
    this.name = name
  }

  get personName() {
    return this.name
  }

  set personName(name) {
    if (name === "") {
      console.log("Error enter a name")
    } else {
      this.name = name
    }
  }
}

const person1 = new Person("Carl")

person1.personName = "Bob"

console.log(person1.personName)

// Задача 6
// ●  Создайте класс Car, у которого есть приватное свойство mileage.
// ●  Используйте геттер и сеттер для доступа к свойству mileage.
// ●  При попытке установить отрицательное значение сеттер должен вывести сообщение об ошибке.
// ●  Создайте экземпляр класса, установите пробег и выведите его с помощью геттера.

class Car {
  #mileage = 0

  get mileage() {
    return this.#mileage
  }

  set mileage(value) {
    if (value > 0) {
      this.#mileage = value
    } else {
      console.log("You cannot enter negatives values")
    }
  }
}

const car = new Car()

car.mileage = 10

console.log(car.mileage)

car.mileage = -1

console.log(car.mileage)

// Задача 1
// Создайте базовый класс Animal, который имеет два свойства: name (имя животного) и type (тип животного). Затем создайте класс Dog, который наследуется от класса Animal. Класс Dog должен иметь дополнительное свойство breed (порода собаки). При создании экземпляра класса Dog, вызовите конструктор родительского класса Animal, передав в него имя и тип собаки. Используйте ключевое слово super для доступа к методам и свойствам родительского класса.

class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }
}

class Dog extends Animal {
  constructor(name, type, breed) {
    super(name, type)
    this.breed = breed
  }
}

const dog1 = new Dog("Max", "Dog", "Pomeranian")

console.log(dog1)

//Задача 2
//Создайте базовый класс User, у которого есть свойства name и age. Добавьте метод displayInfo(), который выводит в консоль информацию о пользователе. Создайте наследника класса User под названием Admin, который будет представлять пользователя с административными правами. Добавьте в класс Admin дополнительное свойство role и метод displayRole(), который выводит в консоль роль администратора.

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  displayInfo() {
    console.log(`User name: ${this.name}, User age: ${this.age}`)
  }
}

class Admin extends User {
  constructor(name, age, role) {
    super(name, age)
    this.role = role
  }

  displayRole() {
    console.log(`${this.name}'s role is ${this.role}`)
  }
}

const admin1 = new Admin("Bob", 34, "admin")

admin1.displayInfo()
admin1.displayRole()

//Задача 3
//Создайте базовый класс Account, представляющий банковский счет, у которого есть свойства id, balance и методы deposit() и withdraw(), для пополнения и снятия средств со счета соответственно. Создайте наследника класса Account под названием SavingsAccount, который представляет собой сберегательный счет. Добавьте в класс SavingsAccount дополнительное свойство interestRate, представляющее годовую процентную ставку, а также метод addInterest(), который добавляет на счет проценты по прошествии определенного времени.

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
    if (value < this.balance) {
      this.balance -= value
    } else {
      console.log("Not enough money on your balance")
    }
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

const account = new SavingsAccount(9873, 1000, 5)

console.log(account.id)
console.log(account.balance)

account.addInterest()

console.log(account.balance)

//Задача 4
//Создайте базовый класс Library, у которого есть свойство books, представляющее массив объектов книг (со свойствами titile и author). Добавьте методы addBook() для добавления книги в библиотеку и removeBook() для удаления книги по названию. Создайте наследника класса Library под названием DigitalLibrary, который представляет собой цифровую библиотеку с дополнительными методами searchByAuthor() и searchByTitle() для поиска книг по автору и названию соответственно. Collapse

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

class DigitalLibrary extends Library {
  constructor(books) {
    super(books)
  }

  searchByAuthor(authorName) {
    const searchResult = this.books.filter(book => book.author === authorName)

    if (searchResult.length === 0) {
      return `There is no book with such author: ${authorName}`
    }

    return searchResult
  }

  searchByTitle(titleName) {
    const searchResult = this.books.filter(book => book.title === titleName)

    if (searchResult.length === 0) {
      return `There is no book with such title: ${titleName}`
    }

    return searchResult
  }
}

const library1 = new DigitalLibrary([])

library1.addBook("The Great Gatsby", "F. Scott Fitzgerald")
library1.addBook("To Kill a Mockingbird", "Harper Lee")
library1.addBook("1984", "George Orwell")
library1.addBook("Pride and Prejudice", "Jane Austen")
library1.addBook("Animal Farm", "George Orwell")

console.log(library1.books)

library1.removeBook("Pride and Prejudice")

console.log(library1.books)

console.log(library1.searchByAuthor("George Orwell"))
console.log(library1.searchByAuthor("George Orwellsssssss"))

console.log(library1.searchByTitle("1984"))
console.log(library1.searchByTitle("198sssss4"))
