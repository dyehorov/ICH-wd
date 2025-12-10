// ООП - это подход к разработке программного обеспечения, который основывается на концепции объектов и их взаимодействия. ООП позволяет организовать код в виде объектов, которые являются экземплярами классов. Классы определяют структуру и поведение объектов, а объекты могут взаимодействовать друг с другом, обмениваясь сообщениями.

// Суть понятия объектно-ориентированного программирования в том, что все программы, написанные с применением этой парадигмы, состоят из объектов.Каждый объект — это определённая сущность со своими данными и набором доступных действий.

// Объект - часть кода, которая описывает элемент с конкретными характеристиками и функциями. Например, элемент в todo листе.
// Объект состоит из состояния (свойства объекта) и поведения (методы объекта)

// Класс - это шаблон для создания объектов (аналогично функциям конструкторам но со своими особенностями).
// Классы могут наследоваться друг от друга. Например, есть общий класс «Поле ввода» и вложенные классы, или подклассы: «Поле ввода строк», «Поле ввода чисел».

// Абстракция User
class User1 {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.vip = false
    this.isAdmin = false
  }

  // писать методы надо не в constructor, так как там мы можем метож поменять или вообще удалить
  hello() {
    console.log(`Hello! I am ${this.name}`)
  }

  getAge() {
    console.log(`${this.name}'s age is ${this.age}`)
  }
}

const user1 = new User1("Alice", 25) // Экземпляр User
const user2 = new User1("Mike", 22) // Экземпляр User
const user3 = new User1("Bob", 28) // Экземпляр User

console.log(user1)
console.log(user2)
console.log(user3)

user1.hello() // мы не видим метод когда выводими экземпляр в консоль мы не видим метод hello(), так как он является методом прототипа Object User
user1.getAge()

// Метод - функция внутри объекта или класса, которая позволяет взаимодействовать с ним или другой частью кода.

// Атрибут - характеристики объекта в программировании — например, цена, производитель или объём оперативной памяти. В классе прописывают, что такие атрибуты есть, а в объектах с помощью методов заполняют эти атрибуты данными.

// Наследование - позволяет создавать иерархию классов, где дочерние классы наследуют свойства и методы от родительских классов. Это позволяет переиспользовать код и создавать более специализированные классы на основе общих характеристик

class User2 {
  constructor(name, age, phone) {
    this.name = name
    this.age = age
    this.phone = phone
  }

  login() {
    console.log(`${this.name} is loggining...`)
  }
}

class Customer extends User2 {
  constructor(name, age, phone, card) {
    super(name, age, phone)
    this.cardNumber = card
  }

  pay() {
    console.log(`${this.name} is paying...`)
  }
}

class Worker extends User2 {
  constructor(name, age, phone, carLicencePlateNumber) {
    super(name, age, phone)
    this.carLicencePlateNumber = carLicencePlateNumber
  }

  bill() {
    console.log(`${this.name} is giving a bill...`)
  }
}

const customer1 = new Customer("John", 23, "+49134213", 4442111233323332)

console.log(customer1)

const worker1 = new Worker("Mike", 25, "+49134213", "AA1321ED")

console.log(worker1)

customer1.login()
worker1.login()

worker1.bill()
customer1.pay()
