"use strict";
/*
Задание 1
Абстрактный класс Animal
Создайте абстрактный класс `Animal` с абстрактным методом `makeSound()`.
Затем создайте классы `Dog` и `Cat`, которые наследуют `Animal` и реализуют метод `makeSound()` по-своему (`Dog` должен возвращать "Bark", а `Cat` — "Meow").
Создайте массив типа `Animal[]`, включающий объекты `Dog` и `Cat`, и вызовите метод `makeSound()` для каждого элемента массива.
*/
class Animal {
}
class Dog extends Animal {
    makeSound() {
        return "Bark";
    }
}
class Cat extends Animal {
    makeSound() {
        return "Meow";
    }
}
const animals = [new Dog(), new Cat()];
animals.forEach(animal => {
    console.log(animal.makeSound());
});
/*
Задание 2
Абстрактный класс Shape с цветом
Создайте абстрактный класс `ColoredShape`, который наследует `Shape` (из задания 4 на уроке) и добавляет абстрактное поле `color`.
Реализуйте классы `ColoredCircle` и `ColoredRectangle`, которые наследуют `ColoredShape`, задают `color` и реализуют метод `calculateArea()`.
Выведите площадь и цвет для каждого объекта.
*/
class Shape {
}
class ColoredShape extends Shape {
}
class ColoredCircle extends ColoredShape {
    radius;
    color;
    constructor(radius, color) {
        super();
        this.radius = radius;
        this.color = color;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class ColoredRectangle extends ColoredShape {
    width;
    height;
    color;
    constructor(width, height, color) {
        super();
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const shapes = [
    new ColoredCircle(5, "Red"),
    new ColoredRectangle(4, 6, "Blue"),
];
shapes.forEach((shape) => {
    console.log(`Color: ${shape.color}`);
    console.log(`Area: ${shape.calculateArea()}`);
});
/*
Задание 3
Абстрактный класс Appliance
Создайте абстрактный класс `Appliance` с абстрактными методами `turnOn()` и `turnOff()`.
Затем создайте классы `WashingMachine` и `Refrigerator`, которые наследуют `Appliance` и реализуют методы `turnOn()` и `turnOff()`, выводя соответствующие сообщения.
Создайте массив типа `Appliance[]`, добавьте в него объекты `WashingMachine` и `Refrigerator`, и вызовите методы `turnOn()` и `turnOff()` для каждого элемента.
*/
class Appliance {
}
class WashingMachine extends Appliance {
    turnOn() {
        console.log("Washing machine is turned on");
    }
    turnOff() {
        console.log("Washing machine is turned off");
    }
}
class Refrigerator extends Appliance {
    turnOn() {
        console.log("Refrigerator is turned on");
    }
    turnOff() {
        console.log("Refrigerator is turned off");
    }
}
const appliances = [new WashingMachine(), new Refrigerator()];
appliances.forEach((appliance) => {
    appliance.turnOn();
    appliance.turnOff();
});
/*
Задание 4
Абстрактный класс Account
Создайте абстрактный класс `Account` с абстрактными методами `deposit(amount: number)` и `withdraw(amount: number)`.
Реализуйте классы `SavingsAccount` и `CheckingAccount`, которые наследуют `Account`.
В классе `SavingsAccount` добавьте логику для начисления процентов на остаток.
В классе `CheckingAccount` реализуйте снятие средств с учетом комиссии.
Проверьте работу методов на объектах обоих классов.
*/
class Account {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
}
class SavingsAccount extends Account {
    interestRate;
    constructor(balance, interestRate) {
        super(balance);
        this.interestRate = interestRate;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance = this.balance + amount;
            console.log(`Deposited: ${amount}`);
        }
        else {
            console.log("Deposit amount must be greater than zero");
        }
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than zero");
            return;
        }
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log(`Withdrawn: ${amount}`);
        }
        else {
            console.log("Not enough money");
        }
    }
    addInterest() {
        const interest = (this.balance * this.interestRate) / 100;
        this.balance = this.balance + interest;
        console.log(`Interest added: ${interest}`);
    }
}
class CheckingAccount extends Account {
    commission;
    constructor(balance, commission) {
        super(balance);
        this.commission = commission;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance = this.balance + amount;
            console.log(`Deposited: ${amount}`);
        }
        else {
            console.log("Deposit amount must be greater than zero");
        }
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than zero");
            return;
        }
        const totalAmount = amount + this.commission;
        if (totalAmount <= this.balance) {
            this.balance = this.balance - totalAmount;
            console.log(`Withdrawn: ${amount}`);
            console.log(`Commission: ${this.commission}`);
        }
        else {
            console.log("Not enough money");
        }
    }
}
const savingsAccount = new SavingsAccount(1000, 10);
savingsAccount.deposit(500);
savingsAccount.withdraw(300);
savingsAccount.addInterest();
console.log(`Savings account balance: ${savingsAccount.balance}`);
const checkingAccount = new CheckingAccount(1000, 20);
checkingAccount.deposit(200);
checkingAccount.withdraw(300);
console.log(`Checking account balance: ${checkingAccount.balance}`);
/*
Задание 5
Абстрактный класс Media
Создайте абстрактный класс `Media` с абстрактным методом `play()`.
Затем создайте классы `Audio` и `Video`, которые наследуют `Media` и реализуют метод `play()` по-своему (например, `Audio` выводит "Playing audio", а `Video` — "Playing video").
Создайте массив типа `Media[]`, включающий объекты `Audio` и `Video`, и вызовите метод `play()` для каждого элемента массива.
*/
class Media {
}
class Audio extends Media {
    play() {
        console.log("Playing audio");
    }
}
class Video extends Media {
    play() {
        console.log("Playing video");
    }
}
const mediaList = [new Audio(), new Video()];
mediaList.forEach((media) => {
    media.play();
});
