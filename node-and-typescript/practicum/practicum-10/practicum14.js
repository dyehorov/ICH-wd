"use strict";
// Задание 2
// Статический метод для создания объектов
// 1.	Создайте класс `Product`, который имеет свойства `name` (название продукта) и `price` (цена продукта).
// 2.	Добавьте статический метод `createDiscountedProduct`, который принимает название продукта, цену и процент скидки, а затем возвращает новый объект `Product` с учетом скидки.
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    static createDiscountedProduct(name, price, discount) {
        const discountedPrice = price - (price * discount) / 100;
        return new Product(name, discountedPrice);
    }
}
const product = Product.createDiscountedProduct("Ball", 500, 10);
console.log(product);
// Задание 3
// Модификаторы доступа в классе `BankAccount`
// 1.	Создайте класс `BankAccount`, который содержит защищенное свойство `balance` (баланс).
// 2.	Реализуйте метод `deposit()`, который увеличивает баланс, и метод `withdraw()`, который уменьшает баланс.
// 3.	В классе `BankAccount` должен быть публичный метод `getBalance()`, который возвращает текущий баланс.
// 4.	Создайте объект и проверьте работу методов.
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(value) {
        if (value < 0)
            return "Value cannot be negative";
        this.balance += value;
        return `${value} deposited to your account. The balance is ${this.balance}`;
    }
    withdraw(value) {
        if (value < 0)
            return "Value cannot be negative";
        if (value > this.balance)
            return "Not enough money on you balance.";
        this.balance -= value;
        return `${value} has been withdrawn from your account`;
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(1000);
console.log(account.deposit(1000));
console.log(account.getBalance());
console.log(account.withdraw(1200));
console.log(account.withdraw(1000));
// Задание 4
// Наследование и работа со статическим свойством
// 1.	Создайте класс `Employee` с полями `name` (имя) и `position` (должность).
// 2.	Добавьте статическое свойство `employeeCount`, которое увеличивается при создании нового сотрудника.
// 3.	Затем создайте класс `Manager`, который наследуется от `Employee` и добавляет новое свойство `department` (отдел).
class Employee {
    name;
    position;
    static employeeCount = 0;
    constructor(name, position) {
        this.name = name;
        this.position = position;
        Employee.employeeCount++;
    }
}
class Manager extends Employee {
    department;
    constructor(name, position, department) {
        super(name, position);
        this.department = department;
    }
}
const employee1 = new Employee("John", "Developer");
const employee2 = new Employee("Alice", "Designer");
const manager1 = new Manager("Bob", "Manager", "IT");
console.log(Employee.employeeCount);
// Задание 5
// Переопределение метода `describe` в классе `Book`
// 1.	Создайте класс `Book`, который содержит свойства `title` (название книги) и `author` (автор).
// 2.	Добавьте метод `describe()`, который выводит в консоль информацию о книге.
// 3.	Затем создайте класс `EBook`, который наследуется от `Book` и добавляет новое свойство `fileSize` (размер файла).
// 4.	Переопределите метод `describe()`, чтобы добавить информацию о размере файла.
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    describe() {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    }
}
class EBook extends Book {
    fileSize;
    constructor(title, author, fileSize) {
        super(title, author);
        this.fileSize = fileSize;
    }
    describe() {
        super.describe();
        console.log(`File size: ${this.fileSize} MB`);
    }
}
const book = new Book("1984", "George Orwell");
book.describe();
const ebook = new EBook("Clean Code", "Robert Martin", 5);
ebook.describe();
