// Что возвращает функция?

// У функции есть основная задача - ей надо что-то вернуть

// ключевое слово в функции return, когда функция доходит до этого слова, функция прерывает свой вызов

function sum(num1, num2) {
  console.log(num1 + num2);

  return;

  console.log(2); // вот это не выведется
}

sum(5, 6);

// зачем нужен return?
// если нам надо что-то сделать в функции (преобразвовать) и потом это переиспользовать

function foo() {
  const a = 45;

  return a;
}

// 2 вопроса к функции
// В чем логика? - создать переменную 'а'
// Что возвращает? - возвращает переменную 'а'

// После вызова функции, функция исчезает, а останется только то, что мы напишем в return;
// Если return нет, то вернется undefined.

const result = foo();
console.log(result); // 45

function foo2() {
  const b = 3;
}

const result2 = foo2();
console.log(result2); // undefined

// функция foo2 не имеет return, значит она ничего не возвращает - undefined.

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(7, 8)); // 15

const sum2 = sum(10, 22);
console.log(sum2); // 32

// снова сделаем функцию для поиска числа в списке

function findWordInAList(list, word) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === word) {
      return "Found";
    }
  }
  return "Not found";
}

console.log(findWordInAList(["hello", "world", "name", "dan"], "name"));
console.log(findWordInAList(["hello", "world", "name", "dan"], "how"));

// Функция - это объект, а в объектах мы можем хранить объекты

const userData = {
  name: "Alice",
  city: "Madrid",
  getAge() {
    return 45;
  },
  getCountry() {
    return "Spain";
  },
};

userData.getAge();
console.log(userData.getAge());

// Функции которые находятся в объектах принадлежат объекту, вызвать можно только через объект.
// Функция которая находится в объекте называется МЕТОД !!!!

// В чем разница между функцией и методом?
//        -> Функциональной разницы нет, единственная разница - метод находится в объекте

function sum5(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sum5(2, 3, 5)); // 10
console.log(sum5(2, 5)); // NaN, потому что мы не передали 3 число, значит оно undefined, а  2+5+undefined = NaN
// для этого используют по умолчанию значения, но это сильно зависит от условия  function sum5(num1 = 0, num2 = 0, num3 = 0)
// console.log(sum5(2,5))  если по умолчанию указано 0, то return вернет 7

console.log("========Задание 1========");

const square = (number) => {
  return number ** 2;
};

console.log(square(6));

console.log("========Задание 2========");

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

console.log(isEven(10));

console.log("=======Задание 3=========");

const concatenate = (string1, string2) => `${string1} ${string2}`;

console.log(concatenate("hello", "world"));

// callback functions (Функции обратного вызова)

// Если функция является аргументом для другой функции - то она callback

function hello() {
  console.log("hello");
}
function boo() {
  console.log("render");
}
function foo5(func) {
  func();
}
foo5(hello);
foo5(boo);

// Остаточные параметры (...rest)

// если надо передать больше параметров в функцию, надо спользовать ... (rest parametr), либо же можно передать неограниченое количество элементов.

function mySum(num1, num2, ...restNumbers) {
  console.log(num1);
  console.log(num2);
  console.log(restNumbers);
}

// что происходит? Мы передаем 2 обязательных параметра и далее остаточные параметры которые необязательны

mySum(4, 3); // тут у нас 2 обязательных параметров, но нет остаточных. Значит при выводе restNumbers у нас будет пустой массив

// То есть все что идет после обязательных параметров будет закинуто в массив

function sum5(...restNumbers) {
  let sum = 0;
  for (let i = 0; i < restNumbers.length; i++) {
    sum += restNumbers[i];
  }
  return sum;
}

console.log(sum5(10, 30, 10, 50));

// тут у нас получается так что не важно сколько введет пользователь чисел, они будут складываться
