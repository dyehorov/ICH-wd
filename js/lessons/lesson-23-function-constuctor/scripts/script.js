// Функции конструктор в JS - это специальный тип функции, который используется для создания новых объектов с общими свойствами и методами

// Когда функция вызывается с использованием оператора new, она создает новый объект и привязывает this к этому объекту.
// Конструктор - это обычная функция за тем исключением, что в ней мы можем установить свойства и методы

const userData = {
  id: 45453,
  name: "Alice",
  age: 45,
}

// Есть один пользователь, а что если на тысячи таких пользователей? Для этого используются функции конструкторы

// Функция конструктор определят структуру будущего экземпляра.
// Функции которые называются с большой буквы - функции конструкторы

function User(username, userage) {
  this.name = username
  this.age = userage
  this.isAdmin = false
  this.vip = false
  this.hello = function () {
    console.log(`Hello, I am ${this.name}`)
  }
}

const user1 = new User("Max", 24)
const user2 = new User("John", 34)
const user3 = new User("Tom", 31)

// user1.hello()
// user2.hello()
// user3.hello()

function Car(brand, model, year) {
  this.brand = brand
  this.model = model
  this.year = year
  this.print = function () {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`
    )
  }
}

const car1 = new Car("Toyota", "Camry", 2017)

console.log(car1)

car1.print()

// createCar(car1)

async function createCar(carData) {
  try {
    const response = await fetch("/postcar", {
      method: "POST",
      body: JSON.stringify(carData),
    })
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

// Определение контекста в функциях

// call, apply и bind - это методы, которые позволяют указать контекст выполнения для функции

const getInfoFunctions = {
  getName() {
    console.log(this.name)
  },
}

const user11 = {
  name: "Alice",
  age: 22,
  getName() {
    console.log(this.name)
  },
}

const user22 = {
  name: "Amanda",
  age: 25,
}

getInfoFunctions.getName.call(user11)

//Метод call() вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.

getInfoFunctions.getName.call(user22)

function greet(number1, number2, number3) {
  console.log(`Hello, ${this.name}`)
  console.log(number1, number2, number3)
}

const user33 = { name: "Peter" }

greet.call(user33, 76, 67, 23)

// Метод apply() вызывает функцию с указанным значением this и аргументами, предоставленными в виде массива

greet.apply(user33, [64, 34, 21])

// Метод bind() создает новую функцию, привязывая указанное значение this к функции. Возвращаемая функция может быть вызвана позже.

greet.bind(user11) // но bind сразу же не вызывается, он меняет контекст и возвращает функцию

const user44 = { name: "Amy" }

function greetUser() {
  console.log(this.name)
}

const newGreet = greetUser.bind(user44)

newGreet()

const calculator = {
  add(num1, num2) {
    this.sum = num1 + num2
  },
  divide(num1, num2) {
    this.division = num1 / num2
  },
}

const circle1 = { sum: 0, division: 0 }
const rectangle1 = { sum: 0, division: 0 }
const rectangle2 = { sum: 0, division: 0 }
const rectangle3 = { sum: 0, division: 0 }

calculator.add.call(circle1, 10, 5)
calculator.divide.call(circle1, 20, 2)

console.log(circle1)

calculator.add.call(rectangle1, 20, 5)
calculator.divide.call(rectangle1, 30, 2)

console.log(rectangle1)

// 1. Написать функцию, которая принимает 2 аргумента и результат их сложения записывает в this.result. Использовать метод call().

function sum(num1, num2) {
  this.result = num1 + num2
}

const counter = {
  result: 0,
}

sum.call(counter, 2, 4)

console.log(counter)

// 2. Написать функцию, которая принимает 2 аргумента и результат их деления записывает в this.result. Использовать метод apply().

function division(num1, num2) {
  this.result = num1 / num2
}

division.apply(counter, [40, 2])

console.log(counter)

function addOne() {
  this.value += 1
}

const counter2 = {
  value: 0,
}

const countPlus = addOne.bind(counter2)

countPlus()
countPlus()
countPlus()
countPlus()

console.log(counter2)
