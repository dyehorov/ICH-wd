// Boolean принимает 2 значения - true or false. В оснвном мы получаем булевой тип данных из операций. Boolean будет всегда результатом сравнения

let isAdmin = false;
console.log(isAdmin); // false

// явное приведение к Boolean;
const num = 43;
const booleanValue = Boolean(num);
console.log(booleanValue); // true

// неявное приведение к Boolean
const firstNumber = 5;
const secondNumber = 10;

const booleanNumber = firstNumber == secondNumber;
console.log(booleanNumber); // false

// == не строгое сравение, не учитывается тип данных. === строгое сравнение, учитывает тип данных. Так же и не равно имеем != и !==

const number = 50;
const string = "50";
console.log(number == string, "не строгое сравнение"); // true
console.log(number === string, "строгое сравнение"); // false

console.log(number != string, "не строгое"); // false так как 50 равно 50
console.log(number !== string, "строгое"); // true а тут смотрит сначала на тип, а потом уже на значение, если хоть одно из них не равное другому, то будет false.
console.log(string !== "50"); // false

// явное приведение типов Number() String() Boolean()

const str = "0";
console.log(Boolean(str)); // true, потому что строка не пустая
// const str2 = "";
// console.log(Boolean(str2)); // false, пустая строка

// 6 основных false в js - false, 0, "", null, undefined, NaN

// null and undefined

//undefined - переменная которая была объявлена, но ей не определили значение. В коде undefined не прописывается.
let x;
console.log(x); // undefined

//null - это явное присвоенное значение. Тут должно быть значение, но сейчас его намеренно нет. Прописывается в коде.
// Пример: пользователь не хочет указывать возраст, мы вводим let userAge = null.

let y = null;
console.log(y); // null

// null - ожидаемая пустота, undefined - неожидаемая

// оператор if

let userName = null;

if (userName === null) {
  console.log("Unregistered");
} else {
  console.log("Registered with the name: " + userName);
}

// необязательно в if() ложить операцию сравнение, можно и одиночное значение, false дадут известные 6 значения - false, 0, "", NaN, null, undefined

const number5 = 5;

if (number5 > 0) {
  console.log("Число положительное");
} else if (number5 < 0) {
  console.log("Число отрицательное");
} else {
  console.log("Число равно нулю");
}

const str1 = "Hello";
const str2 = "World";

if (str1 === str2) {
  console.log("Строки равны");
} else {
  console.log("Строки не равны");
}
