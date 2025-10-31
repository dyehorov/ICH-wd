// object oriented programming
class Animal {
  say() {
    throw new Error("abstract class");
  }
}

class Dog extends Animal {
  say() {
    console.log("gau gau");
  }
}

class Cat extends Animal {
  say() {
    console.log("myau");
  }
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

// dog.say();
// cat.say();
// animal.say();

// class Stack {

// }

class Stack {
  data = [];
  // returns void
  push(num) {
    this.data = [num, ...this.data];
  }

  // returns last el
  pop(num) {
    const { num, ...rest } = this.data;
    return rest;
  }

  size() {
    return this.data.length;
  }
}

const person = { name: "123123", age: 123, age1: 123 };

// function abc({ name }) {
//   console.log(name);
// }

// const newPerson = { ...person };
// const { name, ...rest } = newPerson;

// abc(person);

function testStack() {
  const stack = new Stack();

  stack.push(1); // undefined (dont return anything)
  console.log(stack.data);

  stack.push(2);
  console.log(stack.data);
  stack.push(3);

  // [3, 2, 1]

  stack.pop(); // return 3
  // [2, 1]

  stack.pop(); // return 2
  // [1]

  stack.pop(); // return 1
  // []
  stack.pop(); // return undefined;
}

testStack();
