// Массивы (Arrays) - специальный тип данных, который может содержать множество элементов.

const array = []; // or you can const array = new Array(); but it is used rarely
console.log(typeof array); // object

const fruits = ["apple", "banana", "orange"];
const mixedArray = ["apple", 76, "banana", false, "orange", , , , , , "cherry"];

console.log(fruits);

// Массив - это индексируемая сущность, у каждого элемента есть свой "адрес" - от 0 и до конца массива.

console.log(mixedArray[1]);
console.log(mixedArray[0 + 2]); // у нас тут операция сложения, сначало выполняется сложение, а уже потом обращение к элементу.
console.log(mixedArray[2 + 2]); // orange

mixedArray[0] = "pineapple"; // перезапись элемента

console.log(mixedArray); // [ 'pineapple', 76, 'banana', false, 'orange' ]

// чтоб добавить элемент так же обращение по индексу

mixedArray[5] = "kiwi";
console.log(mixedArray); // ['pineapple',76,'banana',false,'orange','kiwi',<4 empty items>,'cherry']

// длина массива

console.log(mixedArray.length); // 11, длина считается по элементам, не индексам.

// =============перебор массива=============

const names = ["John", "Max", "Alice"];

// console.log(names[0] + "!"); // John!
// console.log(names[1] + "!"); // Max!
// console.log(names[2] + "!"); // Alice!

// не удобно, поэтому используем циклы

for (let i = 0; i < names.length; i++) {
  names[i] += "!";
}

console.log(names); // [ 'John!', 'Max!', 'Alice!' ]

// Массивы ведут себя по другому чем обычные переменные

let a = 2;
let b = a;

a = 10;

console.log(a); // 10
console.log(b); // 2

const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2[0] = 999;

console.log(arr1); // [999, 2, 3]
console.log(arr2); // [999, 2, 3]

console.log("==============Задание 1==============");

const colors = ["yellow", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.log("==============Задание 2==============");

const numbers = [1, 2, 3, 5, 21, 23, 64, 73, 13, 4];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("==============Задание 3==============");

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

console.log("==============Задание 4==============");

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// console.log(numbers.reduce((a, b) => a + b, 0));

console.log("==============Задание 5==============");

for (let i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}

const arr3 = [1, ["hello", false]];

console.log(arr3[0]); // 1
console.log(arr3[1][1]); // false
