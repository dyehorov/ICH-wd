// this - всегда какой-то js объект, в контексте которого выполняется код. В разных частях кода this может ссылаться на разные объекты. В глобальной области видимости this ссылается на объект window

// Контекст - это обычный js объект, имеет смысл о нем говорить когда есть методы или функции

// У каждой функции есть контекст

// Каждая функция определяет свой контекст при вызове, никак не при объявлении

function foo() {
  console.log(this)
}

// foo() // вызвана в глобальной области видимости, значит ее контекст ссылается на window

// this это ссылка на объект, значит мы можем использовать его методы через точку, к примеру this.getName()

const name = "Bob"

const userData = {
  name: "Alice",
  age: 23,
  getName() {
    console.log(this.name)
  },
}

// userData.getName() // Alice, если не будет this, то выведет Bob

// Контекст вызова будет опредилятся в зависимо от того, что слева от точки

// У нас userData.getName(), значит все this в getName() поменяются на userData

function render() {
  console.log(this)
}

// render()

const userData2 = {
  foo: () => {
    console.log(this.name)
  },
}

// userData2.foo() // выведет window, так как метод был записан как стрелочная функция

// контекст стрелочной функции определяется во время ее объявления

const userData3 = {
  name: "Alice",
  sayHello() {
    console.log(`Hello, my name is ${this.name}`)
  },
  getAge() {
    console.log(this.age)
  },
}

// userData3.sayHello()
// userData3.getAge() // undefined

// Создать объект person со свойствами name и age и с методом myAge, который будет выводить сообщение в консоль с использованием свойства age объекта.

const person = {
  name: "Alice",
  age: 23,
  myAge() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`)
  },
}

person.myAge()

// 2. Создать объект calculator с методами add и multiply и свойством result, равному 0, которые будут принимать два числа и возвращать их сумму и произведение соответственно в переменную result

const calculator = {
  result: 0,
  add(num1, num2) {
    this.result = num1 + num2
  },
  multiply(num1, num2) {
    this.result = num1 * num2
  },
}

calculator.add(2, 5)
console.log(calculator.result)

calculator.multiply(4, 3)
console.log(calculator.result)

// 3. Создать обработчик события “click” для кнопки, при клике на которую будет меняться цвет фона.

const changeBgButton = document.createElement("button")
changeBgButton.textContent = "Change bg color"

document.body.appendChild(changeBgButton)

changeBgButton.addEventListener("click", () => {
  //   console.log(this) // вот тут выведет window, а если на место колбека будет не стрелочная а обычная функция, то выведет <button>change bg color</button>
  document.body.style.backgroundColor = "blue"
})
