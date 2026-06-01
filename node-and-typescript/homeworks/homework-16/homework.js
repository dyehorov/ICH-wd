"use strict";
/*

Задание 1
Функция приветствия
Напишите функцию `greetUser`, которая принимает имя пользователя (строка) и выводит приветственное сообщение в консоль: `"Привет, <name>!"`. Используйте строгую типизацию.
*/
function greetUser(name) {
    return `Hello, ${name}`;
}
console.log(greetUser("Alice"));
function printPersonInfo(person) {
    return `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`;
}
const user = {
    name: "Alice",
    age: 23,
    city: "Milan",
};
console.log(printPersonInfo(user));
/*
Задание 3
Простая типизация для числового параметра
Напишите функцию `squareNumber`, которая принимает число и возвращает его квадрат. Используйте строгую типизацию.
*/
function squareNumber(number) {
    return number * number;
}
console.log(squareNumber(4));
/*
Задание 4
Типизация функции с boolean
Напишите функцию `isEven`, которая принимает число и возвращает `true`, если число четное, и `false`,если нечетное. Используйте строгую типизацию.
*/
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(2));
console.log(isEven(5));
function printStudentInfo(student) {
    return `Student: ${student.name}, Grade: ${student.grade}`;
}
const student = {
    name: "Tom",
    grade: 97,
};
console.log(printStudentInfo(student));
/*
Задание 6
Функция с типом `void`
Напишите функцию `logMessage`, которая принимает строку и выводит её в консоль без возвращаемого значения. Используйте тип `void`.
*/
function logMessage(str) {
    console.log(str);
}
console.log(logMessage("Hello, World!"));
