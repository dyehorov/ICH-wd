// Методы push, forEach, map

// Метод push() - добавляет элемент/элементы в конец массива, он изменяет массив (массив мутирует)

const numbers = [1, 2, 3];
numbers.push(4, 5, 6);

console.log(numbers); // [1,2,3,4,5,6]

// Метод push возвращает длинну массива

const numbers2 = [99];

const r = numbers2.push(5); // numbers2.push(5) - тут сначала добавляется 5 в массив и потом метод push возвращает длинну [99, 5] - то есть 2. r = 2

numbers2.push(r); // тут добавляем r в массив, значит массив у нас [99,5,2]

console.log(numbers2); // [99, 5, 2]

// Если метод добавляет то он возвращает длину, а если убирает то он возвращает удаленный элемент.

// Callback (обратный вызов) - функция которую передают как аргумент в другую функцию

const render = (func) => {
  if (1 === 1) {
    func();
  }
};

render(() => {
  console.log("cat");
});

render(() => {
  console.log("dog");
});

// func = () => {}

// В методах массива break; и continue; не работают.

// Метод forEach() - метод, который используется для выполнение указанной функции для каждого элемента. Возвращает ничего, его не записывают в переменную.

// Метод forEach() не мутирует массив

const numbers3 = [4, 5, 2, 0, 1, 10];

// for (let i = 0; i < numbers3.length; i++) {
//   console.log(numbers3[i] * 3 + "!");
// }

// numbers3.forEach((element, index, array) => {}); // (element, index, array) => {} - callback в forEach принимает element, index (изначально равен 0) и массив по которому идем  (numbers3)

// array.forEach((element, index, array) => {  метод перебирает массив и на каждой итерации вызывает колбек.
//   console.log(element * 2);
// });

numbers3.forEach((number, index, numbers3) => {
  console.log(index + 1 + ": " + number * 2 + "!");
});

const users = [
  { name: "Mark", age: 12 },
  { name: "Lola", age: 11 },
  { name: "Carl", age: 17 },
  { name: "Tom", age: 14 },
];

users.forEach((user) => {
  console.log(user.name);
});

// Метод map - пробегается по массиву и на каждой итерации вызывает колбек функцию. НО метод map возвращает новый массив, метод map не мутирует оригинальный массив.
// Метод map пробегается по массиву и обновляет данные массива на каждой итерации.

// array.map((element, index, array) => {  метод перебирает массив и на каждой итерации вызывает колбек.
//   console.log(element * 2);
// });

const result = numbers3.map((number, index) => {
  return number * 2;
});

console.log(result);

// map() без return в callback вернет undefined, там callback обязателен

console.log("Задание 1");

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers4.forEach((number) => {
  if (number % 2 === 0) {
    console.log(number);
  }
});

console.log("Задание 2");

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 23 },
  { name: "Charlie", age: 22 },
];

const onlyNames = people.map((person) => {
  return { name: person.name };
});

console.log(onlyNames);

console.log("Задание 3");

const numbers5 = [42, 22, 456, 21, 21, 34, 56];

const resultStringNumbers = numbers5.map((number) => {
  return number + "";
});

console.log(resultStringNumbers);
