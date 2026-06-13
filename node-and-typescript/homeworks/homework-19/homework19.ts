// Задание 1
// Напишите стрелочную функцию `sumEvenNumbers`, которая принимает массив чисел и возвращает сумму всех четных чисел.

const sumEvenNumbers = (numbers: number[]): number => {
  return numbers.reduce((accum, item) => {
    if (item % 2 === 0) {
      accum += item

      return accum
    }

    return accum
  }, 0)
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5]))

// Задание 2
// Определите интерфейс `StringToBooleanFunction` для функции, которая принимает строку и возвращает `boolean` (например, проверяет, является ли строка пустой). Реализуйте такую функцию.

interface StringToBooleanFunction {
  (str: string): boolean
}

const isStringEmpty: StringToBooleanFunction = function (str) {
  return str.length === 0
}

console.log(isStringEmpty(""))
console.log(isStringEmpty("sad"))

// Задание 3
// Создайте тип `CompareStrings` для функции, принимающей две строки и возвращающей `boolean` (например, для проверки равенства строк). Напишите функцию, соответствующую этому типу.

type CompareStrings = {
  (str1: string, str2: string): boolean
}

const compareStrings: CompareStrings = (str1, str2) => {
  return str1 === str2
}

console.log(compareStrings("hello", "world"))
console.log(compareStrings("hello", "hello"))

// Задание 4
// Напишите обобщенную функцию `getLastElement`, которая принимает массив любого типа и возвращает последний элемент этого массива.

function getLastElement<T>(arr: T[]): T {
  return arr[arr.length - 1]
}

console.log(getLastElement<number>([1, 2, 3, 4, 5]))
console.log(getLastElement<string>(["hello", "world", "node"]))

// Задание 5
// Создайте обобщенную функцию `make Triple`, которая принимает три аргумента одного типа и возвращает массив из этих трёх элементов.

function makeTriple<T>(item1: T, item2: T, item3: T): [T, T, T] {
  return [item1, item2, item3]
}

console.log(makeTriple<number>(5, 3, 56))
console.log(makeTriple<string>("Hello", "world", "node"))
