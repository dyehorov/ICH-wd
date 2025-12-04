class User {
  constructor(name) {
    this.name = name
  }

  register() {
    console.log("I am signing up")
  }

  login() {
    console.log("I am signing up")
  }

  sayHello() {
    console.log("Hello!")
  }
}

class Director extends User {
  constructor(name, room) {
    super(name)
    this.room = room
  }

  openSchool() {
    console.log("Oppening school doors...")
  }

  hire() {
    console.log("Hiring...")
  }

  fire() {
    console.log("Firing...")
  }

  sayHello() {
    super.sayHello()
    console.log(`I am a director. My name is ${this.name}`)
  }
}

class Teacher extends User {
  constructor(name, classSize) {
    super(name)
    this.classSize = classSize
  }

  teach() {
    console.log("Teaching...")
  }

  sayHello() {
    super.sayHello()
    console.log("I am a teacher. Please sit down")
  }
}

class Student extends User {
  constructor(name, grade) {
    super(name)
    this.grade = grade
  }

  chooseSubject() {
    console.log("Choosing subject...")
  }

  sayHello() {
    super.sayHello()
    console.log("I am a student. I have done my homework")
  }
}

class BioTeacher extends Teacher {
  constructor(name, classSize, bioLabNumber) {
    super(name, classSize)
    this.bioLabNumber = bioLabNumber
  }
}
class MathTeacher extends Teacher {}
class ChemTeacher extends Teacher {}

// Полиморфизм - является один из принципов объектно-ориентированного программирования (ООП).
// помогает проектировать объекты таким образом, чтобы они могли совместно использовать или переопределять любое поведение с конкретными предоставленными объектами. Идея заключается в способности вызывать один и тот же метод для разных объектов, и при этом каждый объект реагирует по-своему.

const director1 = new Director("Max", 1241)
const teacher1 = new Teacher("Anna", 32)
const student1 = new Student("Bob", 4.5)
const bioTeacher1 = new BioTeacher("Carl", 32, "2442")

// console.log(bioTeacher1) //BioTeacher { name: 'Carl', classSize: 32, bioLabNumber: '2442' }

// Инкапсуляция является одним из ключевых понятий объектно-ориентированного программирования и представляет сокрытие состояния объекта от прямого доступа извне для поддержания целостности данных.

// По умолчанию все свойства объектов являются публичными, общедоступными, и мы к ним можем обратиться из любого места программы.

//Но мы можем их скрыть от доступа извне. Для этого свойство определяется как локальная переменная/константа

class User1 {
  #account = 20

  constructor(name) {
    this.name = name
  }

  get account() {
    return this.#account
  }

  set account(amount) {
    if (amount <= this.#account) {
      this.#account -= amount
    } else {
      console.log("Not enough money on balance")
    }
  }
}

const user1 = new User1("Alex")

//console.log(user1) // User1 { name: 'Alex' }

user1.account = 5

console.log(user1.account)
