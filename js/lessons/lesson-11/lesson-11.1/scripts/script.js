// Методы pop, filter и sort

// ==========pop()============
// pop() - метод массива, который используется для удаления последнего элемента массива. Изменяет сам массив и возвращает сам элемент.

const fruits = ["apple", "cherry", "banana"];
const lastFruit = fruits.pop();

console.log(fruits); // [ 'apple', 'cherry' ]
console.log(lastFruit); // banana

// 1.Создайте массив animals с элементами "cat", "dog", "rabbit". Используйте метод pop(), чтобы удалить последний элемент массива.

console.log("Задача 1");

const animals = ["cat", "dog", "rabbit"];
animals.pop();

console.log(animals);

// 2.Создайте массив letters с элементами "A", "B", "C". Используйте метод pop(), чтобы получить и вывести последнюю букву.

console.log("Задача 2");

const letters = ["A", "B", "C"];
const lastLetter = letters.pop();

console.log(lastLetter);

//=============filter()============

// filter() - метод позволяет получить новый массив, отфильтровав элементы с помощью переданной callback function. Функция вернет true или false, если true - элемент добавляется в итоговый массив, если false - не добавляется в итоговый массив.

// filter() возвращает обновленный массив, не мутирует оригинальный

//     .filter((element, index, array) => {})

// Функции которые возвращают true или false называют предиктами

function isNegative(number) {
  return number < 0;
}

const numbers = [4, 2, 1, -2, 7, 5, 8, 9, 33, 12];

const positiveNumbers = numbers.filter((number, index, arr) => {
  return number > 0;
});

console.log(positiveNumbers); // [ 4, 2, 1, 7, 5, 8, 9, 33, 12]

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers); // [ 4, 2, -2, 8, 12 ]

// 3.Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только числа, которые делятся на 3 без остатка.

console.log("Задача 3");

const numbers2 = [9, 12, 5, 18, 7, 24];

const divideByThreeWithNoRest = numbers2.filter((number) => {
  return number % 3 === 0;
});

console.log(divideByThreeWithNoRest);

//===============sort()================

// sort() - метод который на месте сортирует элементы массива и возвращает отсортированный массив.

// sort() принимает необязательную функцию сравнения. Функция обязательно должна возвращать отрицательное число, положительное число или ноль. В зависимости от возвращаемого значения происходит сортировка массива.

// Мутирует оригинальный массив

const elements = ["v", "d", "r", "b", "s", "a"];
//               [118, 100, 114, 98, 115, 97]
elements.sort();
// сортирует по ASCII
console.log(elements); // [ 'a', 'b', 'd', 'r', 's', 'v' ]

// так же и будет если ввести числа

const numbers3 = [4, 2, 11, 1, 6, 3, 7];
//             [52, 50, 49, 49, 54, 51, 55]

numbers3.sort();

console.log(numbers3); // [ 1, 11, 2, 3, 4, 6, 7]

const numbers4 = [34, 26, 456, 12, 9, 5, 10];

numbers4.sort((a, b) => {
  return a - b;
}); // сортирует по возрастанию

numbers4.sort((a, b) => {
  return b - a;
});

console.log("Sorted array", numbers4);

/*
  a - значение следующей итерации 
  b - значение текущей итерации

  ● Если a - b меньше 0, сортировка поставит a по меньшему индексу, чем b, то
есть, a идёт первым.
  ● Если a - b вернёт 0, сортировка оставит a и b неизменными по отношению
друг к другу, но отсортирует их по отношению ко всем другим элементам.
  ● Если a - b больше 0, сортировка поставит b по меньшему индексу, чем a.
*/

const persons = [
  { name: "Алиса", age: 25 },
  { name: "Боб", age: 30 },
  { name: "Карл", age: 20 },
];

persons.sort((a, b) => {
  return a.age - b.age;
});

console.log(persons);

persons.sort((a, b) => {
  return a.name.length - b.name.length;
});

console.log(persons);

// сортировка по буквам
// charCodeAt(index) - возвращает значение строки в ASCII

console.log("hello".charAt(2), "hello".charCodeAt(2)); // буква l - числовое представление 108

persons.sort((a, b) => {
  return a.name.charCodeAt(1) - b.name.charCodeAt(1);
});

console.log(persons);

const numbers6 = [2, -5, -7, 4, 6];

const result = numbers6
  .filter((number) => {
    return number > 0;
  })
  .map((number) => {
    return number * 2;
  });

console.log(result); // [ 4, 8, 12 ]

// сначала фильтруем, а потом уже меняем массив, если делать наоборот то будет больше итераций, так как 2 раза пройдемся по одному и тому же массиву
