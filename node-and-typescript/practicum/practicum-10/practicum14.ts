// Задание 2
// Статический метод для создания объектов
// 1.	Создайте класс `Product`, который имеет свойства `name` (название продукта) и `price` (цена продукта).
// 2.	Добавьте статический метод `createDiscountedProduct`, который принимает название продукта, цену и процент скидки, а затем возвращает новый объект `Product` с учетом скидки.

class Product {
  public name: string
  public price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }

  static createDiscountedProduct(
    name: string,
    price: number,
    discount: number,
  ): Product {
    const discountedPrice = price - (price * discount) / 100

    return new Product(name, discountedPrice)
  }
}

const product = Product.createDiscountedProduct("Ball", 500, 10)

console.log(product)

// Задание 3
// Модификаторы доступа в классе `BankAccount`
// 1.	Создайте класс `BankAccount`, который содержит защищенное свойство `balance` (баланс).
// 2.	Реализуйте метод `deposit()`, который увеличивает баланс, и метод `withdraw()`, который уменьшает баланс.
// 3.	В классе `BankAccount` должен быть публичный метод `getBalance()`, который возвращает текущий баланс.
// 4.	Создайте объект и проверьте работу методов.

class BankAccount {
  protected balance: number

  constructor(balance: number) {
    this.balance = balance
  }

  public deposit(value: number): string {
    if (value < 0) return "Value cannot be negative"

    this.balance += value

    return `${value} deposited to your account. The balance is ${this.balance}`
  }

  public withdraw(value: number): string {
    if (value < 0) return "Value cannot be negative"

    if (value > this.balance) return "Not enough money on you balance."

    this.balance -= value

    return `${value} has been withdrawn from your account`
  }

  public getBalance(): number {
    return this.balance
  }
}

const account = new BankAccount(1000)

console.log(account.deposit(1000))
console.log(account.getBalance())
console.log(account.withdraw(1200))
console.log(account.withdraw(1000))

// Задание 4
// Наследование и работа со статическим свойством
// 1.	Создайте класс `Employee` с полями `name` (имя) и `position` (должность).
// 2.	Добавьте статическое свойство `employeeCount`, которое увеличивается при создании нового сотрудника.
// 3.	Затем создайте класс `Manager`, который наследуется от `Employee` и добавляет новое свойство `department` (отдел).

class Employee {
  public name: string
  public position: string

  static employeeCount: number = 0

  constructor(name: string, position: string) {
    this.name = name
    this.position = position

    Employee.employeeCount++
  }
}

class Manager extends Employee {
  public department: string

  constructor(name: string, position: string, department: string) {
    super(name, position)
    this.department = department
  }
}

const employee1 = new Employee("John", "Developer")
const employee2 = new Employee("Alice", "Designer")
const manager1 = new Manager("Bob", "Manager", "IT")

console.log(Employee.employeeCount)

// Задание 5
// Переопределение метода `describe` в классе `Book`
// 1.	Создайте класс `Book`, который содержит свойства `title` (название книги) и `author` (автор).
// 2.	Добавьте метод `describe()`, который выводит в консоль информацию о книге.
// 3.	Затем создайте класс `EBook`, который наследуется от `Book` и добавляет новое свойство `fileSize` (размер файла).
// 4.	Переопределите метод `describe()`, чтобы добавить информацию о размере файла.

class Book {
  public title: string
  public author: string

  constructor(title: string, author: string) {
    this.title = title
    this.author = author
  }

  public describe(): void {
    console.log(`Title: ${this.title}, Author: ${this.author}`)
  }
}

class EBook extends Book {
  public fileSize: number

  constructor(title: string, author: string, fileSize: number) {
    super(title, author)
    this.fileSize = fileSize
  }

  public describe(): void {
    super.describe()
    console.log(`File size: ${this.fileSize} MB`)
  }
}

const book = new Book("1984", "George Orwell")
book.describe()

const ebook = new EBook("Clean Code", "Robert Martin", 5)

ebook.describe()
