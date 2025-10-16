// Переменные - коробки с данными. Переменные хранят данные для использования их в будущем. В переменной может лежать одно значение.

// let const var - ключевые слова для объявления переменной

// let - позволяет объявить переменную доступную только в блоке кода в котором была объявлена. Переменную объявленой let можно изменять.

let a = 50;
let v = 12;
let b = 564;

let f = 45;
console.log(f); // 45

f = 75;
console.log(f); // 75

// const (константа) - точно такой же как и let, единственное переменная объявлена с помощью const не может быть изменена как в let.

const k = 50;
console.log(k); // 50

// k = 60; Error, нельзя переобъявлять переменную, которая была объявлена с помощью const.
// console.log(k); Error

const userName = "Danylo";
console.log(userName); // Danylo

const firstNumber = 5;
const secondNumber = 10;

const sum = firstNumber + secondNumber;

console.log(sum); // 15

// Типы данных string (строка) и number (число)

//String (строка)
const greeting = "Hello, World!";
const message = "Welcome to our website";

console.log(greeting, message); // Hello, World! Welcome to our website

//Number (число) - может быть целым или дробным, положительным или отрицательным
const age = 30;
const price = 9.99;

console.log(age + " and " + price); // 30 and 9.99

// Операции с типами данных

const number1 = 5;
const number2 = 10;
console.log(number1 + number2); // 15
console.log(number1 - number2); // -5
console.log(number1 / number2); // 0.5
console.log(number1 * number2); // 50

// Конкатенация - объединение строк, главное чтоб была хотя бы одна строка и "+".
// Строки складываются. Даже если одна переменная будет число, то все равно сложатся

const numberOne = "5";
const numberTwo = "10";
console.log(numberOne + numberTwo); // 510

const myNumber = 5;
console.log(myNumber + numberTwo); // 510

// можно воспользоваться "+" перед string для того чтобы она стала строкой
console.log(myNumber + +numberTwo); // 15

// со всеми остальными операциями необязательно переводить строку
console.log(numberOne - numberTwo); // -5
console.log(numberOne / numberTwo); // 0.5
console.log(numberOne * numberTwo); // 50

//Интерполяция - это способ вставки значения переменной внутри строки, используя специальный синтаксис ${};

const firstName = "John";
const lastName = "Doe";

const fullName = `${firstName} ${lastName}`;
console.log(fullName + " <- this is a " + typeof fullName);

const value = firstName * myNumber;
console.log(value); // NaN - Not a number. Так как "w" мы не можем преобразить в число. NaN - результат вычисления — невалидное число.

// Типы данных: number, string, boolean, undefined, object, bigInt, symbol, null
