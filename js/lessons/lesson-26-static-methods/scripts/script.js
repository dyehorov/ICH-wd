// class User {
//   static staticMethod() {
//     console.log("Static method of class User")
//   }

//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   login() {
//     console.log("login")
//   }

//   register() {
//     console.log("register")
//   }
// }

// const user1 = new User("Bob", 45)

// user1.login()
// user1.register()

// User.staticMethod()

class Article {
  constructor(title, date) {
    this.title = title
    this.date = date
  }

  static compareDate(article1, article2) {
    console.log(article1.date === article2.date)
  }
}

const firstArticle = new Article("HTML", "12.12.2025")
const secondArticle = new Article("CSS", "12.12.2025")

Article.compareDate(firstArticle, secondArticle)

// 1. Создайте класс Calculator, у которого будет статический метод add(), который будет принимать два числа и возвращать их сумму.

class Calculator {
  static add(num1, num2) {
    return num1 + num2
  }
}

console.log(Calculator.add(2, 3))

// 2. Создайте класс RandomNumberGenerator, у которого будет статический метод generate(a, b), который будет генерировать случайное число в заданном диапазоне.

class RandomNumberGenerator {
  static generate(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  }
}

console.log(RandomNumberGenerator.generate(2, 5))

// 3. Создайте класс MathUtils (Математический утилитар), у которого будет статический метод getMax(), который будет принимать массив чисел и возвращать наибольшее число.

class MathUtils {
  static getMax(array) {
    return array.reduce((accum, item) => {
      if (accum < item) {
        accum = item

        return accum
      }

      return accum
    })
  }
}

console.log(MathUtils.getMax([2, 6, 332, 1, 35, 77, 3]))

// Статические свойства

class User {
  static type = "DEFAULT_USER"

  static staticMethod() {
    console.log("Static method of class User")
  }

  constructor(name, age) {
    this.name = name
    this.age = age
  }

  login() {
    console.log("login")
  }

  register() {
    console.log("register")
  }
}

class Counter {
  static count = 0

  static increment() {
    this.count++
  }

  static decrement() {
    this.count--
  }

  static showCount() {
    console.log(this.count)
  }
}

// Counter.showCount()
// Counter.increment()
// Counter.increment()
// Counter.increment()
// Counter.decrement()
// Counter.showCount()

// forEach

const arr = [7, 5, 3, 2, 1, 63, 4]

// arr.forEach((element, index, array) => {
//   console.log(element * 2)
// })

Array.prototype.mySuperForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

arr.mySuperForEach((el, ind, arr) => {
  console.log(el)
})

Array.prototype.mySuperMap = function (callback) {
  const newArray = []

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }

  return { origin: this, result: newArray }
}

const arr2 = [7, 5, 6]

const newArray = arr2.mySuperMap((el, ind, arr) => {
  return el * ind
})

console.log(newArray)

// filter

Array.prototype.myFilter = function (callback) {
  const newArray = []

  for (let i = 0; i < this.length; i++) {
    const callbackResult = callback(this[i], i, this)
    if (callbackResult) {
      newArray.push(this[i])
    }
  }

  return { origin: this, filtered: newArray }
}

const arr3 = [-2, 2, 42, -242, 4242, -44, 87, 13]

const filteredArray = arr3.myFilter((el, ind, arr) => {
  return el > 0
})

console.log(filteredArray)

// find

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const callbackResult = callback(this[i], i, this)
    if (callbackResult) {
      return this[i]
    }
  }

  return undefined
}

const arr4 = [-2, 2, 42, -242, 4242, -44, 87, 13]

const value = arr4.myFind((el, ind, arr) => {
  return el === 4242
})

console.log(value)

// reduce

Array.prototype.myReduce = function (callback, initialValue) {
  let accum
  let index

  if (!initialValue) {
    accum = this[0]
    index = 1
  } else {
    accum = initialValue
    index = 0
  }

  for (let i = index; i < this.length; i++) {
    accum = callback(accum, this[i], i, this)
  }

  return accum
}

const arr6 = [-2, 2, 42, -242, 4242, -44, 87, 13]

const maxValue = arr6.myReduce((accum, el) => {
  if (accum < el) {
    accum = el

    return accum
  }

  return accum
})

console.log(maxValue)
