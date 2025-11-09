/*  

==========Data types===========

string (primitive)       "hello" , 'aaaa', `sdaddaa` 
number (primitive)       45 56 -56 6.55 0
boolean (primitive)      true false
undefined (primitive)    undefined
null (primitive)         null
Object (non-primitive)   array[], object{}  — non-primitive (reference) data type
BigInt (primitive)       90991n
Symbol (primitive)       

// Non-primitive types can combine or store other values — for example, arrays and objects.
// They are called reference types because they store memory references, not actual data.


============Variable Declarations============

var
- Function-scoped.
- Can be redeclared and reassigned.
- Hoisted and initialized with `undefined`.
- Not recommended in modern JavaScript               !!!!!!!!!!

let
- Block-scoped.
- Can be reassigned but not redeclared in the same scope.
- Hoisted but not initialized (in temporal dead zone until declaration).
- Recommended for variables that change.

const
- Block-scoped.
- Cannot be reassigned or redeclared.
- Hoisted but not initialized.
- Use for constants or references that should not change.

============Scope Examples============

// Function scope (var)
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ Works — var ignores block scope, but cannot go out of the function 
}

// Block scope (let / const)
function testLetConst() {
  if (true) {
    let y = 20;
    const z = 30;
  }
  console.log(y); // ❌ ReferenceError
  console.log(z); // ❌ ReferenceError
}

============Usage in Loops============

// for...in / for...of can use const or let
for (const key in obj) { console.log(key); }
for (const item of array) { console.log(item); }

// Use let if variable is reassigned inside the loop
for (let i = 0; i < 5; i++) { console.log(i); }


===========Type Coersion========

String(123)    "123"
Number("45")    45
Boolean("")    false
"5" - 1         4
"5" + 1         "51"


===========Falsy Values==========

A falsy value is one that becomes false when converted to Boolean.

0
-0
0n
""
false
null
undefined
NaN
document.all   // The only falsy object in JavaScript


============Operators==========

Arithmetic:
+ - * / % **

Comparison:
== != === !== > < >= <=

Logical:
&& || ! ??

Ternary:
let result = condition ? "yes" : "no";  // Needs an else part and can be assigned to a variable.

Nullish Coalescing:
let name = userName ?? "Guest";   // If the left operand is not undefined/null → take left value; otherwise take right.


============Control Flow=========

if / else if / else
switch
for, while, do...while

break, continue   
// break stops a loop completely
// continue skips current iteration but keeps looping


===========Arrays===========

// Definition:
Array (non-primitive)
// A special data type that can store multiple values in a single variable.
// Used to organize and access data easily.


// Declaration:
let arr = [];          // common
let arr2 = new Array(); // rarely used
let fruits = ["apple", "banana", "orange"];


// Accessing elements:
fruits[0];             // "apple"
fruits[1] = "pear";    // change element


// Length:
arr.length;            // number of elements
arr[arr.length - 1];   // last element


// Looping (iteration):
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// Notes:
- Indexing starts at 0.
- The last index = length - 1.
- Arrays are objects (non-primitive type).


// Example:
const colors = ["red", "blue", "green"];
const numbers = [3, 7, 1, 5];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) console.log(numbers[i]);
}


===========Value vs Reference===========

// Primitives (copied by value)
let a = 2;
let b = a;
a = 10;

console.log(a); // 10
console.log(b); // 2

// Primitive types store value directly in memory.
// Copying a primitive creates a new independent value.


// Non-primitives (copied by reference)
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 999;

console.log(arr1); // [999, 2, 3]
console.log(arr2); // [999, 2, 3]

// Non-primitive types (objects, arrays) store memory references.
// Copying them shares the same reference — changing one affects the other.


// Why stored by reference:
// - Efficiency: avoids copying large data structures.
// - Flexibility: allows shared and mutable structures.


// Summary:
- Primitive types → copied by VALUE (independent)
- Non-primitive types → copied by REFERENCE (shared)


==========Objects==========

// Like arrays, objects are non-primitive types, 
// but arrays store lists, while objects describe specific things — for example, a user.


// Objects are like arrays, but they store data using named keys instead of numeric indexes.
// Example:
const user = {
  name: "Alice",
  age: 25,
  city: "Berlin"
};
// Here 'name', 'age', and 'city' are keys — like labels for each value.


Object — non-primitive data type that stores information as key–value pairs.

Key: always a string (or symbol)
Value: any data type (number, string, array, object, function)


// Example:
const person = {
  name: "Sofiia",
  age: 25
};


// Access:
person.name;        // dot notation
person["age"];      // bracket notation
let prop = "name";
person[prop];       // dynamic key access

// Undefined property → undefined


==========Create Object==========

// Literal syntax
let car = { brand: "Tesla", model: "Model 3", year: 2024 };

// Constructor syntax
let user2 = new Object();
user2.name = "Alex";
user2.age = 30;


==========Add & Delete Properties==========

car.color = "white";   // add property
delete car.year;       // delete property


==========Iterate Properties==========

let fruit = { name: "Apple", color: "red", taste: "sweet" };

for (key in fruit) {
  console.log(key, fruit[key]);
}
// name Apple
// color red
// taste sweet

// note: variable inside for...in (e.g., key) is declared automatically, no const/let


==========Nested Objects==========

// Object inside another object
const customer = {
  name: "Alice",
  address: {
    country: "Japan",
    city: "Tokyo",
    geo: [42.32, 76.2]
  }
};

// Access nested data
console.log(customer.address.city);   // "Tokyo"
console.log(customer.address.geo[0]); // 42.32

// Modify nested property
customer.address.city = "Osaka";

// Add new nested key
customer.address.street = "124 Str.";

// Delete nested property
delete customer.address.geo;

// Template literal example:
console.log(`Location: ${customer.address.city}, ${customer.address.country}`);


==========Objects in Arrays==========

const students = [
  { name: "Anna", grades: { math: 90, bio: 85 } },
  { name: "Luca", grades: { math: 78, bio: 88 } }
];

console.log(students[0].grades.math); // 90

// Arrays can also be inside objects
const school = {
  students: ["Anna", "Luca", "Mia"]
};


/*
 Summary:

- Arrays store ordered lists of values.
- Objects store named properties (key–value pairs).
- Both are non-primitive, reference types.
- Objects can contain arrays, and arrays can contain objects.
- Use objects for structured data, arrays for ordered data.



=================Functions=================

Definition:
Functions are reusable blocks of code.
In JavaScript, functions are *first-class citizens*:
- can be passed as arguments
- can be returned from other functions
- can be stored in variables
- can be object properties

=================Function Declaration=================
Syntax:
function name(param1, param2, ...) {
  // code block
  return value;
}

Example:
function hello(name) {
  return `Hello, ${name}!`;
}

- function declarations are hoisted (can be used before defined)
- can be called before their definition

=================Function Expression=================
A function can also be created as an expression (anonymous or named):

const hello = function(name) {
  return `Hello, ${name}`;
};

- not hoisted (cannot be used before defined)
- can be passed as a callback

=================Arrow Functions=================
const hello = (name) => `Hello, ${name}`;

- shorter syntax
- no own this / arguments
- best for callbacks and short logic

=================Calling Functions=================
Declaring a function doesn’t execute it — you must *call* it:
hello("JS"); // function call

=================Return=================
`return` sends a value back from the function:
function sum(a, b) {
  return a + b;
}

=================Scope=================
- Variables declared inside a function are local.
- A function can access global variables, but globals cannot access locals.

Example:
let x = 10;
function show() {
  let y = 5;
  console.log(x); // 10 (global)
  console.log(y); // 5 (local)
}
console.log(y); // ❌ error (not defined)

=================Functions in Objects=================
Functions stored in objects are called *methods*.

const car = {
  start() { console.log("Car started"); },
  stop() { console.log("Car stopped"); }
};

car.start(); // method call

=================Recursion=================
Recursion = when a function calls itself.

Example:
function countdown(n) {
  if (n <= 0) return;
  console.log(n);
  countdown(n - 1);
}

countdown(5); // 5, 4, 3, 2, 1

⚠️ Always include a base case (exit condition) to avoid infinite loops.

=================Practice Ideas=================
1. greet() → logs "Hello, world!"
2. square() → asks for a number, prints its square
3. isEven() → checks if a number is even
4. concatenate() → merges two strings and logs the result


=================Function Naming=================

Rule:
Function names should describe an *action* (verbs).
Use short, clear, meaningful names that show what the function does.

Common prefixes:
get...(), set...(), calc...(), create...(), check...(), update...(), remove...()

Example:
function showMessage() {}
function getUserName() {}
function calcSum() {}

=================Object Methods (ES6 Short Syntax)=================

Since ES6, you can define methods in objects using a shorter syntax.

Old way:
const user = {
  sayHello: function(name) {
    return `Hello, ${name}`;
  }
};

New ES6 way:
const user = {
  sayHello(name) {
    return `Hello, ${name}`;
  }
};


=================Arrow Functions=================

Arrow functions = shorter way to write functions (introduced in ES6).

Syntax:
const name = (param1, param2) => expression;

Example:
const sum = (a, b) => a + b;

Rules:
- No own `this` (inherits from outer scope).
- If only one parameter → parentheses optional.
- If only one expression → `{}` and `return` can be omitted.

Examples:
const square = n => n * n;
const greet = () => console.log("Hello!");
const multiply = (a, b) => a * b;

Usage:
Perfect for callbacks in methods like:
map(), filter(), reduce()

Example:
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

=================Practice=================
1. square(n) → returns n²  
2. isEven(num) → returns true if even, else false  
3. concatenate(a, b) → returns joined string

=================Function Parameters=================

Default parameters:
If a value is not passed, the parameter is `undefined`.
You can set a default value directly in the function header.

Example:
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

Rest parameters:
Collect multiple arguments into an array.

Example:
function multiply(factor, ...numbers) {
  return numbers.map(n => n * factor);
}

multiply(2, 1, 2, 3); // [2, 4, 6]

=================arguments Object=================

`arguments` is a pseudo-array of all arguments passed to a function.

Example:
function showArgs() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

showArgs("JS", "is", "fun");
// JS
// is
// fun

Use `arguments.length` to get the number of passed values.

⚠️ Note:
- Works only in traditional functions (not arrow functions).
- Modern alternative: use `...rest` instead.

Example:
function joinStrings(separator, ...strings) {
  return strings.join(separator);
}

joinStrings("-", "one", "two", "three"); // "one-two-three"

=================Test Yourself=================
What will this output?

function func(x) {
  let num = x * 2;
}
func(5);
console.log(num);

Answer: ❌ Error (num is not defined, because it's local scope)





push() - добавляет в конец элемент и возвращает длину массива (мутирует массив)
pop() - удаляет последний элемент и возвращает этот элемент (мутирует массив)
shift() - удаляет первый элемент и возвращает его (мутирует массив)
unshift() - добавляет в начало массива элемент и возвращает длину массива (мутирует массив)

forEach() — перебирает все элементы массива и выполняет переданную функцию для каждого элемента, ничего не возвращает (результат — undefined) (не мутирует массив, если сам не поменяешь)
map() — создаёт новый массив, в котором каждый элемент — это результат вызова переданной функции для соответствующего элемента исходного массива (не мутирует массив)
filter() — создаёт новый массив, включающий только те элементы, для которых переданная функция вернула true (не мутирует массив)
sort() — сортирует элементы массива на месте (мутирует оригинал) и возвращает тот же массив, отсортированный по указанной функции сравнения (или по алфавиту, если функция не задана) (мутирует массив)
*/
