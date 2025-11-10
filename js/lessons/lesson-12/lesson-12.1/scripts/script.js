// Методы some и every

// some проверяет есть ли в массиве хотя бы один элемент который удовлетворяет условие.

// some возвращает Boolean

// some перестает проходиться по массиву, как только в return попадет true, то есть some это цикл с break; но break писать не надо.

const numbers = [1, 2, 3]

const result = numbers.some((number) => {
  return number % 2 === 0
})

console.log(result) // true

// 1.Проверьте, содержит ли массив хотя бы одно отрицательное число с помощью метода some().

console.log("Задание 1")

const numbers2 = [1, 2, -3, 4, 5]

console.log(numbers2.some((number) => number < 0))

// 2.Проверьте, содержит ли массив хотя бы одну строку длиной более 10 символов с помощью метода some().
console.log("Задание 2")

const strings = ["apple", "banana", "orange", "watermelon"]

console.log(strings.some((string) => string.length > 10))

// every - проверяет все ли элементы удовлетворяют условия колбек функции
// Возвращает Boolean
// Останавливает перебор как только дошел до первого ложного условия

const numbers3 = [7, -2, 6, -4]
const result2 = numbers3.every((number) => number > 0)

console.log(result2) // false

const numbers4 = [7, 2, 6, 4]
const result3 = numbers4.every((number) => number > 0)

console.log(result3) // true

// 1 Проверьте, являются ли все элементы массива положительными числами с помощью метода every().
console.log("Задание 3")
const numbers5 = [1, 2, 3, 4, 5]

console.log(numbers5.every((number) => number > 0))

// 2 Проверьте, являются ли все элементы массива четными числами с помощью метода every().
console.log("Задание 4")

const numbers6 = [2, 4, 6, 8, 10]

console.log(numbers6.every((number) => number % 2 === 0))

// 5 Создайте массив чисел. Реализуйте функцию hasEvenNumber, используя метод some, чтобы проверить, содержит ли массив хотя бы одно четное число.
console.log("Задание 5")

const numbers7 = [1, 3, 5, 6, 9]

function hasEvenNumber(array) {
  return array.some((number) => number % 2 === 0)
}

console.log(hasEvenNumber(numbers7))

// 6 Создайте массив строк. Реализуйте функцию hasStringWithA, используя метод some, чтобы проверить, содержит ли массив хотя бы одну строку с буквой "a".
console.log("Задание 6")

const words = ["banana", "orange", "kiwi", "pear"]

function hasStringWithA(array) {
  return array.some((word) => word.includes("a"))
}

console.log(hasStringWithA(words))

// 7 Создайте массив чисел. Реализуйте функцию areAllMultiplesOfThree, используя метод every, чтобы проверить, что все числа в массиве кратны 3.
console.log("Задание 7")

const numbers8 = [3, 6, 9, 12]

function areAllMultiplesOfThree(array) {
  return array.every((number) => number % 3 === 0)
}

console.log(areAllMultiplesOfThree(numbers8))

// 8 Создайте массив объектов с полями "name" и "age". Реализуйте функцию hasPersonWithAge, используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с определенным возрастом.
console.log("Задание 8")

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 28 },
]

function hasPersonWithAge(array, specificAge) {
  return array.some(({ age }) => age === specificAge)
}

console.log(hasPersonWithAge(people, 28))

// ========v8, compiler, scope========
//  Есть файл который я написал ->  compiler вступает в работу когда мы запускаем скрипт (он начинает его читать) -> первое что делает compiler - это токенизация

// -----------------------------------------
// Этап 1. Код программы (то, что видит компилятор)
var a
var b

// -----------------------------------------
// Этап 2. Компилятор делает токенизацию и парсинг
// На этом шаге он обнаруживает переменные a и b
// и сообщает об их существовании Scope’у (области видимости).
// Пока значений нет, просто есть имена переменных.

// -----------------------------------------
// Этап 3. Выполнение кода движком V8
// На этом этапе начинается присваивание значений.
a = 5
b = 45 + 2

// -----------------------------------------
// Этап 4. Работа Scope (область видимости)
// Scope хранит переменные и их значения.
// После выполнения кода:
console.log("Значение a:", a) // 5
console.log("Значение b:", b) // 47

// -----------------------------------------
// Этап 5. Под капотом V8 делает:
// 1. Компиляцию (tokenization + parsing)
// 2. Создаёт scope (глобальный или функциональный)
// 3. Выполняет код, обращаясь к scope для чтения/записи переменных
//
// Можно представить это так:
//
// Compiler:
//   - находит var a, var b
//   - сообщает scope, что они существуют
//
// Scope:
//   - хранит { a: undefined, b: undefined } на этапе компиляции
//
// Execution:
//   - a = 5
//   - b = 45 + 2
//   - scope теперь { a: 5, b: 47 }
// -----------------------------------------

console.log("Итоговое состояние scope (глобальные переменные):")
console.log({ a, b })
