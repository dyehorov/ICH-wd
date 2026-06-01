/*

Задание 1
Функция приветствия
Напишите функцию `greetUser`, которая принимает имя пользователя (строка) и выводит приветственное сообщение в консоль: `"Привет, <name>!"`. Используйте строгую типизацию.
*/

function greetUser(name: string): string {
  return `Hello, ${name}`
}

console.log(greetUser("Alice"))

/*
Задание 2
Типизация функции с объектом в качестве параметра
Создайте интерфейс `Person`, который описывает человека с полями `name`, `age`, и `city`.
Напишите функцию `printPersonInfo`, которая принимает объект типа `Person` и выводит информацию о человеке в формате: `"Имя: <name>, Возраст: <age>, Город: <city>"`.
*/

interface Person {
  name: string
  age: number
  city: string
}

function printPersonInfo(person: Person): string {
  return `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`
}

const user: Person = {
  name: "Alice",
  age: 23,
  city: "Milan",
}

console.log(printPersonInfo(user))

/*
Задание 3
Простая типизация для числового параметра
Напишите функцию `squareNumber`, которая принимает число и возвращает его квадрат. Используйте строгую типизацию.
*/

function squareNumber(number: number): number {
  return number * number
}

console.log(squareNumber(4))

/*
Задание 4
Типизация функции с boolean
Напишите функцию `isEven`, которая принимает число и возвращает `true`, если число четное, и `false`,если нечетное. Используйте строгую типизацию.
*/

function isEven(number: number): boolean {
  return number % 2 === 0
}

console.log(isEven(2))
console.log(isEven(5))

/*
Задание 5
Создание интерфейса для объекта
Создайте интерфейс `Student`, который описывает студента с полями `name` (строка) и `grade` (число).
Напишите функцию `printStudentInfo`, которая принимает объект типа `Student` и выводит информацию о студенте в формате: `"Студент: <name>, Оценка: <grade>"`.
*/

interface Student {
  name: string
  grade: number
}

function printStudentInfo(student: Student): string {
  return `Student: ${student.name}, Grade: ${student.grade}`
}

const student: Student = {
  name: "Tom",
  grade: 97,
}

console.log(printStudentInfo(student))

/*
Задание 6
Функция с типом `void`
Напишите функцию `logMessage`, которая принимает строку и выводит её в консоль без возвращаемого значения. Используйте тип `void`.
*/

function logMessage(str: string): void {
  console.log(str)
}

console.log(logMessage("Hello, World!"))
