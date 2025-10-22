/* Домашнее задание 7
1) Создайте массив чисел и выведите значения массива в консоль. (Используйте цикл).
2) Создайте массив произвольных чисел(от 2 до 24) и выведите все числа, которые меньше 20, но больше 8. (Используйте цикл).
const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9]

3) Создайте массив чисел и найдите минимальное значение.

4) *Создайте массив чисел и обновите значение элемента по индексу. 

5) * Создайте массив слов. Найдите самое длинное слово в массиве. (У строк, также как и у массивов, есть свойство length, которое измеряет длину строки). */

console.log("Задание 1");
const numbers = [23, 2, 1, 254, 6544, 32, 2356, 74, 343, 535, 3535, 215, 35675];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("Задание 2");
const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 8 && arr[i] < 20) {
    console.log(arr[i]);
  }
}

console.log("Задание 3");
const arr2 = [23, 2, 1, 254, 6544, 32, 2356, 74, 343, 535, 3535, 215, 35675];

let min = Infinity;

for (let i = 0; i < arr2.length; i++) {
  if (min > arr2[i]) {
    min = arr2[i];
  }
}

console.log(min);

console.log("Задание 4");
const arr3 = [2, 55, 21];
arr3[2] = 124654534;

console.log(arr3);

console.log("Задание 5");

const words = [
  "Hello",
  "World",
  "Numbers",
  "Let",
  "pneumonoultramicroscopicsilicovolcanoconiosis",
];

let longestWord = "";

for (let i = 0; i < words.length; i++) {
  if (longestWord.length < words[i].length) {
    longestWord = words[i];
  }
}

console.log(longestWord);
