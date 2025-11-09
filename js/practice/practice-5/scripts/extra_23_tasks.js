// 1.Создайте массив чисел. Реализуйте функцию squareOddNumbers, используя методы filter и map, чтобы возвести в квадрат только нечетные числа.
console.log("Задание 1");

const numbers5 = [1, 2, 3, 4, 5];

function squareOddNumbers(array) {
  return array
    .filter((number) => {
      return number % 2;
    })
    .map((elem) => {
      return elem * elem;
    });
}

console.log(squareOddNumbers(numbers5));

//2.Создайте массив строк. Реализуйте функцию convertToUpperCase, используя метод map, чтобы преобразовать все строки к верхнему регистру.
console.log("Задание 2");

const words3 = ["javascript", "react", "node"];

function convertToUpperCase(array) {
  return array.map((elem) => {
    const elemUpper = elem.toUpperCase();
    return elemUpper;
  });
}

console.log(convertToUpperCase(words3));

// 3.Создайте массив чисел. Реализуйте функцию findMax, используя метод reduce, чтобы найти максимальное число
console.log("Задание 3");
const numbers6 = [12, 45, 6, 89, 23];

function findMax(array) {
  return array.reduce((accum, elem) => {
    if (accum < elem) {
      return elem;
    }
    return accum;
  }, -Infinity);
}

console.log(findMax(numbers6));

// 4.Создайте массив чисел. Реализуйте функцию removeFirstAndLast, используя методы shift и pop, чтобы удалить первый и последний элементы.
console.log("Задание 4");

const numbers7 = [1, 2, 3, 4, 5];

function removeFirstAndLast(array) {
  array.shift();
  array.pop();

  return array;
}

removeFirstAndLast(numbers7);
console.log(numbers7);

// 5. Создайте массив строк. Реализуйте функцию findLongestWord, используя метод reduce, чтобы найти самую длинную строку.
console.log("Задание 5");

const words4 = ["cat", "elephant", "mouse", "giraffe"];

function findLongestWord(array) {
  return array.reduce((accum, elem) => {
    if (accum.length < elem.length) {
      return elem;
    }
    return accum;
  }, "");
}

console.log(findLongestWord(words4));

// 6. Создайте массив чисел. Реализуйте функцию sumEvenNumbers, используя методы filter и reduce, чтобы найти сумму четных чисел.
console.log("Задание 6");

const numbers8 = [1, 2, 3, 4, 5, 6];

function sumEvenNumbers(array) {
  return array
    .filter((number) => {
      return number % 2 === 0;
    })
    .reduce((accum, elem) => {
      return accum + elem;
    }, 0);
}

console.log(sumEvenNumbers(numbers8));

// 7.Создайте массив объектов с полями "product" и "price". Реализуйте функцию applyDiscount, используя метод map, чтобы применить скидку 10% ко всем товарам.
console.log("Задание 7");

const products = [
  { product: "book", price: 100 },
  { product: "pen", price: 50 },
  { product: "notebook", price: 200 },
];

function applyDiscount(array) {
  return array.map((elem) => {
    elem.price -= elem.price * 0.1;
    return elem;
  });
}

console.log(applyDiscount(products));

// 8.Создайте массив строк. Реализуйте функцию countLetters, используя методы map и reduce, чтобы посчитать общее количество букв во всех строках.
console.log("Задание 8");
const words5 = ["hello", "world", "javascript"];

function countLetters(array) {
  return array.reduce((accum, elem) => {
    return (accum += elem.length);
  }, 0);
}

console.log(countLetters(words5));

// 9. Создайте массив чисел. Реализуйте функцию sortDescending, используя метод sort, чтобы отсортировать числа по убыванию.
console.log("Задание 9");

const numbers9 = [3, 1, 4, 2, 5];

function sortDescending(array) {
  return array.sort((a, b) => {
    return b - a;
  });
}

console.log(sortDescending(numbers9));

// 10. Создайте массив объектов с полями "name" и "salary". Реализуйте функцию increaseSalary, используя метод forEach, чтобы увеличить зарплату на 15% всем сотрудникам.
console.log("Задание 10");

const employees = [
  { name: "John", salary: 1000 },
  { name: "Alice", salary: 1500 },
  { name: "Bob", salary: 2000 },
];

function increaseSalary(array) {
  array.forEach((elem) => {
    elem.salary += elem.salary * 0.15;
  });
}

increaseSalary(employees);

console.log(employees);

// 11.Создайте массив чисел. Реализуйте функцию removeDuplicates, используя метод filter, чтобы удалить дубликаты.
console.log("Задание 11");

const numbers11 = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(array) {
  return array.filter((elem, index, array) => {
    return array.indexOf(elem) === index;
  });
}

console.log(removeDuplicates(numbers11));

// 12. Создайте массив строк. Реализуйте функцию addPrefix, используя метод map, чтобы добавить префикс "Mr. " к каждой строке.
console.log("Задание 12");
const names = ["John", "Alice", "Bob"];

function addPrefix(array) {
  return array.map((elem) => {
    return `Mr. ${elem}`;
  });
}

console.log(addPrefix(names));

// 13. Создайте массив чисел. Реализуйте функцию sumPositiveNumbers, используя методы filter и reduce, чтобы найти сумму положительных чисел.
console.log("Задание 13");

const numbers12 = [-2, 5, -8, 10, 3, -1];

function sumPositiveNumbers(array) {
  return array.reduce((accum, elem) => {
    if (elem > 0) {
      return accum + elem;
    }

    return accum;
  }, 0);
}

console.log(sumPositiveNumbers(numbers12));

// 14. Создайте массив чисел. Реализуйте функцию multiplyByIndex, используя метод map, чтобы умножить каждый элемент на его индекс.
console.log("Задание 14");
const numbers13 = [10, 20, 30, 40];

function multiplyByIndex(array) {
  return array.map((element, index) => {
    return element * index;
  });
}

console.log(multiplyByIndex(numbers13));

// 15.Создайте массив строк. Реализуйте функцию findShortestWord, используя метод reduce, чтобы найти самую короткую строку.
console.log("Задание 15");
const words6 = ["cat", "elephant", "ant", "giraffe"];

function findShortestWord(array) {
  return array.reduce((accum, elem) => {
    if (accum.length > elem.length) {
      return elem;
    }

    return accum;
  });
}

console.log(findShortestWord(words6));

// 16. Создайте массив чисел. Реализуйте функцию customOperation, используя методы map и filter, чтобы возвести в квадрат числа больше 5 и отфильтровать результаты меньше 50.
console.log("Задание 16");

const numbers14 = [22, 335, 7, -8, 6, 10, 3, -1];

function customOperation(array) {
  return array
    .filter((elem) => {
      return elem > 5;
    })
    .map((elem) => {
      return elem ** 2;
    })
    .filter((elem) => {
      return elem < 50;
    });
}

console.log(customOperation(numbers14));

// 17.Создайте массив объектов с полями "name" и "age". Реализуйте функцию sortByAge, чтобы отсортировать объекты по возрасту по возрастанию.
console.log("Задание 17");

const people2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 28 },
  { name: "Diana", age: 19 },
];

function sortByAge(array) {
  return array.sort((a, b) => {
    return a.age - b.age;
  });
}

console.log(sortByAge(people2));

//18.Создайте массив объектов с полями "product" и "price". Реализуйте функцию sortByPriceDesc, чтобы отсортировать товары по убыванию цены.
console.log("Задание 18");

const products2 = [
  { product: "laptop", price: 1200 },
  { product: "mouse", price: 25 },
  { product: "keyboard", price: 80 },
  { product: "monitor", price: 300 },
];

function sortByPriceDesc(array) {
  return array.sort((a, b) => {
    return b.price - a.price;
  });
}

console.log(sortByPriceDesc(products2));

// 19. Создайте массив объектов с полями "city" и "population". Реализуйте функцию sortCitiesByPopulation, чтобы отсортировать города по населению по возрастанию.
console.log("Задание 19");

const cities = [
  { city: "London", population: 8900 },
  { city: "Paris", population: 6700 },
  { city: "Berlin", population: 3700 },
];

function sortCitiesByPopulation(array) {
  return array.sort((a, b) => {
    return a.population - b.population;
  });
}

console.log(sortCitiesByPopulation(cities));

// 20.Создайте массив объектов с полями "name" и "salary". Реализуйте функцию sortBySalaryAndName, чтобы отсортировать сначала по зарплате (по убыванию), а при равных зарплатах - по имени (по алфавиту).
console.log("Задание 20");

const employees2 = [
  { name: "John", salary: 50000 },
  { name: "Alice", salary: 75000 },
  { name: "Bob", salary: 50000 },
  { name: "Charlie", salary: 90000 },
];

function sortBySalaryAndName(array) {
  return array.sort((a, b) => {
    if (a.salary === b.salary) {
      return a.name.charCodeAt(0) - b.name.charCodeAt(0);
    } else {
      return b.salary - a.salary;
    }
  });
}

console.log(sortBySalaryAndName(employees2));

// 21. Создайте массив объектов с полями "name", "score" и "time". Реализуйте функцию sortPlayers, чтобы отсортировать игроков сначала по очкам (по убыванию), а при равных очках - по времени (по возрастанию).
console.log("Задание 21");

const players = [
  { name: "Player1", score: 100, time: 120 },
  { name: "Player2", score: 150, time: 90 },
  { name: "Player3", score: 100, time: 110 },
  { name: "Player4", score: 150, time: 85 },
];

function sortPlayers(array) {
  return array.sort((a, b) => {
    if (a.score === b.score) {
      return a.time - b.time;
    } else {
      return b.score - a.score;
    }
  });
}

console.log(sortPlayers(players));

// 22. Создайте массив объектов с полями "student" и "grades" (массив оценок). Реализуйте функцию sortByAverageGrade, чтобы отсортировать студентов по среднему баллу (по убыванию).
console.log("Задание 22");

const students = [
  { student: "Anna", grades: [4, 5, 3, 5] },
  { student: "Max", grades: [3, 4, 4, 3] },
  { student: "Lisa", grades: [5, 5, 5, 4] },
  { student: "Tom", grades: [4, 3, 4, 5] },
];

function sortByAverageGrade(array) {
  return array.sort((a, b) => {
    const averageOfA =
      a.grades.reduce((accum, elem) => {
        return accum + elem;
      }, 0) / a.grades.length;
    const averageOfB =
      b.grades.reduce((accum, elem) => {
        return accum + elem;
      }, 0) / b.grades.length;

    return averageOfB - averageOfA;
  });
}

console.log(sortByAverageGrade(students));

// 23.Создайте массив объектов с полями "name", "age" и "city". Реализуйте функцию sortByCityAndAge, чтобы отсортировать сначала по городу (по алфавиту), а при одинаковых городах - по возрасту (по возрастанию).
console.log("Задание 23");

const people3 = [
  { name: "Alice", age: 25, city: "London" },
  { name: "Bob", age: 32, city: "Paris" },
  { name: "Charlie", age: 28, city: "London" },
  { name: "Diana", age: 19, city: "Berlin" },
];

function sortByCityAndAge(array) {
  return array.sort((a, b) => {
    if (a.city === b.city) {
      return a.age - b.age;
    } else {
      return a.city.charCodeAt(0) - b.city.charCodeAt(0);
    }
  });
}

console.log(sortByCityAndAge(people3));
