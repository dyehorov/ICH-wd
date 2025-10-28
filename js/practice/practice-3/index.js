// 1. Напишите стрелочную функцию, которая принимает массив чисел и возвращает их сумму.

console.log("Задача 1");

const numbers = [1, 2, 3, 4];

const sum = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(sum(numbers));

// 2. Напишите функцию, которая находит максимальный элемент в массиве чисел.

console.log("Задача 2");

const strings = ["Hello", "Identification", "Car", "Identification"];

function maxElementOfArray(strings) {
  let maxElement = "";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > maxElement.length) {
      maxElement = strings[i];
    }
  }
  return maxElement;
}

console.log(maxElementOfArray(strings));

// 3. Напишите функцию, которая удваивает каждый элемент в массиве чисел.

console.log("Задача 3");

const numbers2 = [1, 2, 3, 4, 5];

function doubleElement(list) {
  const doubled = [];
  let i = 0;
  for (let element of list) {
    doubled[i] = element * 2;
    i++;
  }
  return doubled;
}

console.log(doubleElement(numbers2));

// 4. Напишите функцию, которая проверяет, есть ли определенный элемент в массиве.

console.log("Задача 4");

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

// 5. Создайте функцию, которая принимает два массива - один с ключами, другой с значениями - и возвращает объект.
// Пример использования
// const keys = ['name', 'age', 'city'];
// const values = ['John', 25, 'New York'];
// const person = createObject(keys, values);
// console.log(person); // Выведет: { name: 'John', age: 25, city: 'New York' }

console.log("Задача 5");

const keys = ["name", "age", "city"];
const values = ["John", 25, "New York"];

function createObject(keys, values) {
  const object = {};
  for (let i = 0; i < keys.length; i++) {
    object[keys[i]] = values[i];
  }
  return object;
}

const person = createObject(keys, values);
console.log(person);

// 6.  Напишите функцию, которая вычисляет среднее значение чисел в массиве.

console.log("Задача 6");

const numbers3 = [1, 2, 3, 4, 5];

function average(list) {
  let average = 0;
  for (let i = 0; i < list.length; i++) {
    average += list[i] / list.length;
  }
  return average;
}

console.log(average(numbers3));

// 7. *** Напишите функцию, которая сортирует массив чисел по возрастанию.

console.log("Задача 7");

// Пример использования
// const numbers = [4, 2, 7, 1, 9];
// sortNumbers(numbers);
// console.log(numbers); // Выведет: [1, 2, 4, 7, 9]

function sortNumbers(numbers) {
  const sortedArray = [];
  let index = 0;
  for (let i = 0; i < numbers.length; i++) {
    index = 0;
    for (let k = 0; k < numbers.length; k++) {
      if (numbers[i] > numbers[k]) {
        index++;
      }
    }
    sortedArray[index] = numbers[i];
  }
  return sortedArray;
}

const numbers4 = [4, 2, 7, 1, 9];
console.log(sortNumbers(numbers4));

// 8. Напишите функцию, которая принимает объект и массив свойств этого объекта и создает новый объект, включая только указанные свойства.
// Пример использования
// const person = { name: 'Alice', age: 30, city: 'London' };
// const selectedProperties = pickProperties(person, ['name', 'city']);
// console.log(selectedProperties); // Выведет: { name: 'Alice', city: 'London' }

console.log("Задача 8");

function pickProperties(obj, arr) {
  const newObject = {};
  for (const key in obj) {
    for (const element of arr) {
      if (key === element) {
        newObject[element] = obj[key];
        break;
      }
    }
  }
  return newObject;
}

const person2 = { name: "Alice", age: 30, city: "London" };
const selectedProperties = pickProperties(person2, ["name", "city"]);
console.log(selectedProperties); // Выведет: { name: 'Alice', city: 'London' }

// 9. Написать функцию, которая принимает объект и возвращает количество ключей в этом объекте.

console.log("Задача 9");

function calculateKeysAndValues(object) {
  sumOfKeys = 0;
  for (const key in object) {
    sumOfKeys++;
  }
  return `${sumOfKeys} keys in this object`;
}

console.log(calculateKeysAndValues(selectedProperties));

// 10. Напишите функцию, которая принимает массив строк и число minLength, возвращая новый массив строк длиной не меньше minLength.

console.log("Задача 10");

function arrayWithFixedLengthOfElements(array, minLength) {
  const newArray = [];

  for (const element of array) {
    if (element.length > minLength) {
      newArray.push(element);
    }
  }

  return newArray;
}

const strings2 = ["Hello", "Man", "Initialization", "Corn", "Fun"];

console.log(arrayWithFixedLengthOfElements(strings2, 4));

// 11. Напишите функцию, которая принимает массив чисел и возвращает объект с количеством вхождений каждого числа.

const votes = [1, 2, 2, 3, 2, 4, 1, 3, 3, 3];

// 12. Напишите функцию, проверяющую, все ли элементы массива чисел являются четными. Верните true или false.

console.log("Задача 12");

function isAllElementsEven(array) {
  for (const element of array) {
    if (element % 2 !== 0) {
      return false;
    }
  }
  return true;
}

console.log(isAllElementsEven([2, 4, 6, 8, 10]));

// 13. Напишите функцию, которая принимает массив объектов и объединяет их в один объект, где повторяющиеся ключи перезаписываются последним значением.

console.log("Задача 13");

const configs = [
  { host: "localhost", port: 3000 },
  { port: 8080, protocol: "http" },
  { host: "api.example.com", timeout: 5000 },
];

function mixObject(array) {
  const mixedObject = {};

  for (const element of array) {
    for (const key in element) {
      mixedObject[key] = element[key];
    }
  }
  return mixedObject;
}

console.log(mixObject(configs));

// 14. Напишите функцию, которая принимает массив объектов и строку key, возвращая первый объект, у которого значение по key не undefined. Если такого нет, верните null.

console.log("Задача 14");

const users = [
  { name: "Anna", email: undefined, phone: undefined },
  { name: "Bohdan", email: "bohdan@example.com" },
  { name: "Cara" }, // email отсутствует
  { name: "Dmytro", email: "dmytro@example.com", phone: 244234 },
];

function findUserByKey(array, key) {
  for (let user of array) {
    if (user[key] !== undefined) {
      return user;
    }
  }
  return null;
}

console.log(findUserByKey(users, "name"));

// 15. Напишите функцию, которая принимает массив объектов с числовым свойством score и возвращает среднее значение score. Пустой массив должен возвращать 0.

console.log("Задача 15");

const results = [
  { name: "Alice", score: 92 },
  { name: "Bohdan", score: 75 },
  { name: "Cara", score: 88 },
  { name: "Dmytro", score: 81 },
];

function getAverageScore(array) {
  let average = 0;
  if (array.length === 0) {
    return 0;
  }
  for (const key of array) {
    average += key.score;
  }
  average = Math.floor(average / array.length);

  return average;
}

console.log(getAverageScore(results));

// 16. Напишите функцию, которая разворачивает массив на один уровень: [1, [2, 3], 4, [5]] → [1, 2, 3, 4, 5].

// 17. Напишите функцию, которая принимает два массива чисел и возвращает массив уникальных значений обоих массивов.

// 18. Напишите функцию, которая принимает объект и массив ключей, проверяя, существует ли цепочка вложенных свойств (например, ['user', 'profile', 'email']).

// 19. Напишите функцию, которая разбивает массив на подмассивы фиксированного размера: [1, 2, 3, 4, 5] и размер 2 → [[1, 2], [3, 4], [5]].
