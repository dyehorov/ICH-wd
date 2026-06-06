/*
Задание 1
Объединение и пересечение типов
Создайте два типа: `Admin` и `User`.
Тип `Admin` должен включать поля `name` (строка) и `permissions` (массив строк), а тип `User` должен включать поля `name` (строка) и `email` (строка).
Создайте тип `AdminUser`, который объединяет свойства обоих типов, и создайте объект этого типа.
*/

type Admin = {
  name: string
  permissions: string[]
}

type User = {
  name: string
  email: string
}

type AdminUser = Admin & User

const user: AdminUser = {
  name: "user",
  email: "user@gmail.com",
  permissions: ["permission"],
}

/*
Задание 2
Вложенные объекты и опциональные поля
Создайте объект `Car` с полями `make` (строка), `model` (строка), и вложенным объектом `engine`, который имеет поля `type` (строка) и `horsepower` (число).
Добавьте опциональное поле `year` (число) для года выпуска машины.
Напишите функцию, которая выводит информацию о машине.
*/

interface ICar {
  make: string
  model: string
  engine: {
    type: string
    horsepower: number
  }
  year?: number
}

const car: ICar = {
  make: "Toyota",
  model: "Camry",
  engine: {
    type: "3.5",
    horsepower: 301,
  },
  //   year: 2018,
}

function showCarInfo(car: ICar): string {
  return `Make: ${car.make}, Model: ${car.model}, Engine: type - ${car.engine.type}, horsepower - ${car.engine.horsepower}, year: ${car.year ? car.year : "Not provided"}`
}

console.log(showCarInfo(car))

/*
Задание 3
Интерфейс для функции с объектом
Создайте интерфейс для функции `calculateDiscount`, которая принимает объект `Product` с полями `name` (строка) и `price` (число), а также параметр `discount` (число).
Функция должна возвращать новую цену продукта с учетом скидки.
*/

interface IProduct {
  name: string
  price: number
  discount: number
}

function calculateDiscount(product: IProduct): number {
  return product.price - (product.price * product.discount) / 100
}

const product: IProduct = {
  name: "Ball",
  price: 10.0,
  discount: 10,
}

console.log("New price:", calculateDiscount(product))

/*
Задание 4
Массив объектов и функции
Создайте интерфейс `Employee`, который включает поля `name` (строка) и `salary` (число).
Создайте массив объектов `Employee`, затем напишите функцию, которая принимает этот массив и возвращает массив зарплат всех сотрудников.
*/

interface Employee {
  name: string
  salary: number
}

const employees: Employee[] = [
  { name: "Alice", salary: 2000 },
  { name: "Bob", salary: 5000 },
  { name: "Carl", salary: 3000 },
]

function getSalaries(employees: Employee[]): number[] {
  return employees.reduce((accum, item) => {
    accum.push(item.salary)

    return accum
  }, [] as number[])
}

console.log(getSalaries(employees))

/*
Задание 5
Наследование интерфейсов и работа с объектами
Создайте интерфейс `Person` с полями `firstName` (строка) и `lastName` (строка).
Создайте интерфейс `Student`, который наследует `Person` и добавляет поле `grade` (число).
Создайте объект `student` этого типа и напишите функцию, которая выводит полное имя студента и его оценку.
*/

interface IPerson {
  firstName: string
  lastName: string
}

interface IStudent extends IPerson {
  grade: number
}

const student: IStudent = {
  firstName: "Carl",
  lastName: "Johnson",
  grade: 92,
}

function getStudentData(student: IStudent): void {
  console.log(
    `Name: ${student.firstName} ${student.lastName}, Grade: ${student.grade}`,
  )
}

getStudentData(student)

/*
Задание 6
Интерфейс для функции с несколькими параметрами
Создайте интерфейс для функции `concatStrings`, которая принимает два параметра: `str1` и `str2` (оба строки) и возвращает их объединение.
Реализуйте эту функцию и протестируйте её.
*/

interface IConcatStrings {
  (str1: string, str2: string): string
}

const concatStrings: IConcatStrings = function (str1, str2) {
  return str1 + str2
}

console.log(concatStrings("Hello", "World"))
