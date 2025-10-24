/* 
Задание 1
Создайте функцию, которая принимает два числа в качестве параметров и возвращает их сумму, для второго параметра определите значение по умолчанию. Затем вызовите функцию и выведите результат в консоль.

Задача 2
Создайте массив numbers с несколькими числами.
Напишите функцию calculateSum, которая принимает массив и возвращает сумму всех его элементов, не используя методы массивов.

Задача 3 *
Создайте массив students с объектами студентов (имя, возраст, курс).
Напишите функцию displayStudentInfo, которая принимает студента и выводит его информацию в консоль.
*/

console.log("Задание 1");

function sum(num1, num2 = 0) {
  return num1 + num2;
}

console.log(sum(5, 10));

console.log("Задание 2");

const numbers = [2, 3, 5, 10];

function calculateSum(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

console.log(calculateSum(numbers));

console.log("Задание 3");

const students = [
  {
    name: "Mario",
    age: 24,
    year: 3,
  },
  {
    name: "Liza",
    age: 22,
    year: 2,
  },
  {
    name: "Nancy",
    age: 25,
    year: 4,
  },
  {
    name: "John",
    age: 20,
    year: 1,
  },
];

function displayStudentInfo(studentList) {
  for (let student of studentList) {
    console.log(
      `Name: ${student.name}, age: ${student.age}, year: ${student.year}`
    );
  }
}

displayStudentInfo(students);
