// Функции - Functions

// Функции называют в основном глаголом
/*
    showMessage();
    getAge();
    calcSum();
    createForm();
    
*/

// Если функция возвращает булеан (true, false), то называют isLoggedIn(), hasPermision(), canFind();

// У функции есть логика и есть возврат. Логика все что до return, а возврат - это return

// специальный тип объекта

// функции первого класса (first - class functions) - это концепция в JS по которой функции считаются обычными объектами. Их можно передавать как аргумент и возвращать в качестве результата при вызове других функций высшего порядка. Так же можно создавать анонимно и присваивать в качестве значений переменных или свойств объектов.

// функции сделаны для того, чтоб автоматизировать программму

//===============Способы создать функцию===============

// функции могут быть объявлены по разному, НО вызываются они ОДИНАКОВО

// function declaration

function register() {
  const a = 37;
  console.log(a);
}

function welcome() {
  console.log("Hello");
}

welcome();

// function expression

const sum = function (a, b) {
  // используем const на функция так как это обьект
  console.log(a + b);
};

sum(7, 5);

// arrow function

const sum3 = (a, b) => {
  console.log(a + b);
};

sum3(a + b);

//IIFE
(function () {
  console.log("render");
})();

// В чем принципиальное отличие стрелочной от function declaration?
//             1. Синтаксис

// ================ Проблема=======================
const a = 4;
const b = 2;

// const sum = a + b;

const x = 3;
const y = 3;

// const sum2 = x + y;

// постоянно идет повторение логики. В нашем случае не плохо, что мы создаем переменные, плохо то что мы делаем сумму этих чисел повторно, вот тут и нужны функции

function sum2(num1, num2) {
  // объявили функцию, которая будет принимать 2 аргумента (не важно какие названия аргументов, когда мы создаем функцию)
  console.log(num1 + num2);
}

sum2(x, y); // теперь мы вызываем функцию и передаем наши перенные, то есть тут num1 = x, num2 = y;

// все переменные созданные в функции доступны только в функции, даже с var

function variable() {
  var f = 10;
}

// console.log(f); // f is not defined

// Как писать функции:
//      1. Абстрагироваться от всего кода
//           -> к примеру у меня есть имя и фамилия пользователя, мне надо написать функцию привествия, мне все равно что написано сверху или снизу функции, функция должна быть использована везде

const user1 = "Max";
const user2 = "Lora";

function welcome(name) {
  // эта функция к любому имени любого пользователя добавляем Welcome, она может быть испольвана как к user1 так и user2. user1 и user2 у нас известны, они приходят из вне, поэтому это наши параметры.
  //  в качестве параметра можно передать любой тип данных
  console.log(`Welcome, ${name}`);
}
welcome("Alice"); // Welcome, Alice
welcome(5 + 5); // Welcome, 10
welcome(5 === 5); // Welcome, true
welcome(user1); // Welcome, Max
welcome(user2); // Welcome, Lora
welcome(); // Welcome, undefined - если вызвать функцию без параметров, но она ожидает их, то значение будет undefined.

// задача пройтись по каждому массиву и вывести в консоль

// писать цикл к каждому массиву не очень логично, это уже повторение идет, поэтому используем функцию

const numbers = [1, 3, 5, 6, 9, 7];
const strings = ["dad", "ewqd", "wfwfw"];
const booleans = [true, false, false, true, true];

function showArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

showArray(numbers);
showArray(strings);
showArray(booleans);

// так же использовать функции надо если к примеру надо что-то поменять в коде, дабы не менять на многих строках кода что-то используют функции - там надо будет только поменять.

// Вывести true если слово в списке найдено и false если слова нет. Какой список? Какое слово? У нас этого нет, значит делаем эту функцию универсальной, чтоб мы могли любой список использовать и любое слово.

function findWordInAList(list, word) {
  let result = "Not found";
  for (let i = 0; i < list.length; i++) {
    if (list[i] === word) {
      result = "Found";
      break;
    }
  }
  console.log(result);
}

findWordInAList(["hello", "world", "name", "dan"], "name");
findWordInAList(["hello", "world", "name", "dan"], "ice");
