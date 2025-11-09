// методы shift(), unshift(), reduce(), from()

// Методы shift() и unshift() используются для добавления и удаления элементов в начале массива

// shift() - удаляет первый элемент из массива и возвращает его

const fruits = ["apple", "cherry", "banana"]

const firstElement = fruits.shift()

console.log(firstElement) // "apple"
console.log(fruits) // [ 'cherry', 'banana' ]

// unshift() - добавляет элемент в начало элемента и возвращает длину массиву уже после добавления элемента

const addFristElement = fruits.unshift("Watermelon")

console.log(addFristElement) // 3 - длинна массива
console.log(fruits) // [ 'Watermelon', 'cherry', 'banana' ]

// 1.Создайте массив colors с элементами "red", "green", "blue". Используйте метод shift(), чтобы удалить первый элемент массива.
console.log("Задача 1")

const colors = ["red", "green", "blue"]

colors.shift()
console.log(colors)

//2.Создайте массив fruits с элементами "banana", "orange". Используйте метод unshift(), чтобы добавить в начало массива новые фрукты: "apple", "grape".
console.log("Задача 2")

const fruits2 = ["banana", "orange"]
fruits2.unshift("apple", "grape")

console.log(fruits2)

//=============reduce()===============

// reduce() используется для преобразования массива в одно значение путем применения функции к каждому элементу массива. Он принимает функцию обратного вызова и необязательное начальное значение в качестве аргументов.

// reduce() используется не для преобразования массива, а для получение одиночного значения из данных массива (например сумма массива)

// array.reduce((accumulator, element, index, array) => {}, defaultValueOfAccum)

// если не ввести defaultValueOfAccum - то accum забирает значение первого элемента в массиве и начинает перебор со второго элемента, то есть если в массиве 5 чисел, то итераций будет 4.

// лучше выставлять всегда defaultValueOfAccum

// Что такое accum? - значение по итогу которое вернет reduce()

// reduce() возвращает accum после последней итерации

const numbers = [5, 1, 3, 4, 2]

const result = numbers.reduce((accum, elem) => {
  return accum + elem
}, 0)

console.log(result)

// reduce() может заменить любую совокупность методов, только не включаю сортировку

const numbers2 = [2, -6, -7, 4]

// const result2 = numbers2
//   .filter((number) => {
//     return number > 0;
//   })
//   .map((number) => {
//     return number * 2;
//   });

// console.log(result); // [ 4, 8, 12 ]

const result2 = numbers2.reduce((acc, element) => {
  if (element > 0) {
    acc.push(element * 2)
  }

  return acc // return обязательно нужен, потому что следующая итерация от него зависит.
}, [])

console.log(result2) // [ 4, 8 ]

const numbers3 = [2, -6, -7, 4]
const result3 = numbers.reduce((acc, elem) => {
  return "render"
}, [])
console.log(result3) // "render"

const arr = [4, 2, 1, 3, 10]
function foo() {
  return arr.pop()
}
const num1 = arr.unshift(arr.push(foo(), arr.pop()))
//                       arr.push(arr.pop(), arr.pop)

const result4 = arr.push(foo(), num1, foo())

arr.unshift(num1, arr.shift())

console.log(arr)

// Создайте массив чисел. Реализуйте функцию doubleEvenNumbers, используя методы map и filter, чтобы удвоить значения только четных чисел.
const numbers4 = [1, 2, 3, 4, 5]

// function doubleEvenNumbers(array){
//   return array.filter((number) => {
//     return number % 2 ===0;
//   }).map((number) => {
//     return number * 2;
//   })
// }

function doubleEvenNumbers(array) {
  return array.reduce((acc, element) => {
    if (element % 2 === 0) {
      acc.push(element * 2)
    }
    return acc
  }, [])
}

const result5 = doubleEvenNumbers(numbers4)
console.log("Задание 3:", result5)

// Создайте массив чисел. Реализуйте функцию calculateAverage, используя методы reduce, чтобы вычислить среднее значение чисел в массиве.
function calculateAverage(array) {
  return (
    array.reduce((accum, element) => {
      return accum + element
    }, 0) / array.length
  )
}

const result6 = calculateAverage(numbers4)
console.log("Задание 4:", result6)
