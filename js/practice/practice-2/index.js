// Создайте и заполните массив: напишите код, который создает массив и заполняет его числами от 1 до 10. Используйте цикл for для этого.

console.log("Задача 1");

const numbers = [];
for (let i = 1; i <= 10; i++) {
  numbers[i - 1] = i;
}
console.log(numbers);

// Обход массива: создайте массив чисел. Напишите код, который использует цикл for для перебора элементов массива и выводит каждое число в консоль.

console.log("Задача 2");

const numbers2 = [7, 5, "hello", null, -73, false];

for (let key in numbers2) {
  if (typeof numbers2[key] === "number") {
    console.log(numbers2[key]);
  }
}

for (let key of numbers2) {
  if (typeof key === "number") {
    console.log(key);
  }
}

// Поиск в массиве: создайте массив строк и строку для поиска. Напишите код, который использует цикл do-while, чтобы найти, есть ли заданная строка в массиве.

console.log("Задача 3");

const words = ["Apple", "Banana", "Orange"];
const searchValue = "Banana";

function findValue(arr, word) {
  let found = false;
  let i = 0;

  do {
    if (arr[i] === word) {
      found = true;
      break;
    }
    i++;
  } while (i < arr.length);

  return found;
}

console.log(findValue(words, searchValue));

// Обратный обход массива: создайте массив чисел. Напишите код, который использует цикл for, чтобы перебрать массив в обратном порядке (с последнего элемента к первому).

console.log("Задача 4");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

// Фильтрация массива: создайте массив чисел. Напишите код, который использует цикл for, чтобы создать новый массив, который содержит только числа из исходного массива, которые больше 5.

console.log("Задача 5");

const array2 = [7, 5, 1, 0, 3, 15, -5];
const newArray = [];
let newArrayIndex = 0;

for (let i = 0; i < array2.length; i++) {
  if (array2[i] > 5) {
    newArray[newArrayIndex] = array2[i];
    newArrayIndex++;
  }
}

console.log(newArray);

// У вас есть массив студентов с их оценками в виде объектов. Напишите программу, которая проходит по каждому студенту, вычисляет среднюю оценку и создает новый объект, содержащий имена студентов и их средние оценки.
// Исходный массив студентов с оценками

console.log("Задача 6");

const students = [
  { name: "Анна", grades: [85, 90, 92] },
  { name: "Иван", grades: [88, 75, 96] },
  { name: "Мария", grades: [78, 82, 94] },
];

function studentWithAverage(students) {
  const newStudentArray = [];
  let average = 0;
  let i = 0;
  for (const student of students) {
    for (const grade in student.grades) {
      average += Math.floor(student.grades[grade] / student.grades.length);
    }
    newStudentArray[i] = { name: student.name, average: average };
    i++;
    average = 0;
  }
  return newStudentArray;
}

console.log(studentWithAverage(students));

// const students = [
//     { name: "Анна", grades: [85, 90, 92] },
//     { name: "Иван", grades: [88, 75, 96] },
//     { name: "Мария", grades: [78, 82, 94] },
//   ];
//   function calculateAverageGrades(studentGrades) {
//     let sumOfGrades = 0;
//     for (let i = 0; i < studentGrades.length; i++) {
//       sumOfGrades = sumOfGrades + studentGrades[i];
//     }
//     return sumOfGrades / studentGrades.length;
//   }
//   function studentsWithAverages(listOfStudents) {
//     const result = [];
//     for (let i = 0; i < listOfStudents.length; i++) {
//       result[i] = {
//         name: listOfStudents[i].name,
//         average: calculateAverageGrades(listOfStudents[i].grades),
//       };
//     }
//     return result;
//   }
//   console.log(studentsWithAverages(students));

// Напишите функцию, которая переворачивает строку.

const string = "Hello";

function reversedString(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result = result + string[i];
  }

  return result;
}

console.log(reversedString(string));
