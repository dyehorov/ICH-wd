"use strict";
// Задание 1
// Напишите стрелочную функцию `sumEvenNumbers`, которая принимает массив чисел и возвращает сумму всех четных чисел.
const sumEvenNumbers = (numbers) => {
    return numbers.reduce((accum, item) => {
        if (item % 2 === 0) {
            accum += item;
            return accum;
        }
        return accum;
    }, 0);
};
console.log(sumEvenNumbers([1, 2, 3, 4, 5]));
const isStringEmpty = function (str) {
    return str.length === 0;
};
console.log(isStringEmpty(""));
console.log(isStringEmpty("sad"));
const compareStrings = (str1, str2) => {
    return str1 === str2;
};
console.log(compareStrings("hello", "world"));
console.log(compareStrings("hello", "hello"));
// Задание 4
// Напишите обобщенную функцию `getLastElement`, которая принимает массив любого типа и возвращает последний элемент этого массива.
function getLastElement(arr) {
    return arr[arr.length - 1];
}
console.log(getLastElement([1, 2, 3, 4, 5]));
console.log(getLastElement(["hello", "world", "node"]));
// Задание 5
// Создайте обобщенную функцию `make Triple`, которая принимает три аргумента одного типа и возвращает массив из этих трёх элементов.
function makeTriple(item1, item2, item3) {
    return [item1, item2, item3];
}
console.log(makeTriple(5, 3, 56));
console.log(makeTriple("Hello", "world", "node"));
