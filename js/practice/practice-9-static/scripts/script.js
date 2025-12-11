// Задача 1
// Создать класс "Калькулятор" с использованием статических методов и свойств. Класс должен иметь статическое свойство "PI", содержащее значение числа Пи, и статический метод "add", который принимает произвольное количество чисел и возвращает их сумму.

class Calculator {
  static PI = 3.14159

  static add(...numbers) {
    return numbers.reduce((accum, element) => accum + element, 0)
  }
}

const value = Calculator.add(1, 7, 10)

console.log(value)

// Задача 2
// Реализовать класс "Банковский счет" с использованием статического метода "generateAccountNumber". Метод должен генерировать и возвращать уникальный номер счета. Уникальный номер должен состоять из префикса "ACC" и случайного числа, а также должен быть уникальным для каждого экземпляра класса.

class BankAccount {
  static generateAccountNumber() {
    return `ACC${Math.floor(Math.random() * 10_000_000)}`
  }
}

console.log(BankAccount.generateAccountNumber())

// Задача 3
// Создать класс "Студент" с использованием статического метода "getAverageGrade". Метод должен принимать неограниченное количество оценок студента и возвращать среднюю оценку. Кроме того, класс должен иметь статическое свойство "passingGrade", которое определяет минимальную оценку для сдачи курса.

class Student {
  static passingGrade = 70

  static getAverageGrade(...grades) {
    const average =
      grades.reduce((accum, grade) => accum + grade, 0) / grades.length

    return average.toFixed(2)
  }
}

console.log(Student.getAverageGrade(98, 23, 13, 43, 77, 88, 90))

// Задача 5
// Создать класс "Время" с использованием статического метода "getCurrentTime". Метод должен возвращать текущее время в формате "часы:минуты:секунды", а также должен иметь статическое свойство "timeZone", которое определяет часовой пояс.

class Time {
  static timeZone = "UTC"

  static getCurrentTime() {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, "0")
    const minutes = String(now.getMinutes()).padStart(2, "0")
    const seconds = String(now.getSeconds()).padStart(2, "0")

    return `${hours}:${minutes}:${seconds}`
  }
}

console.log(Time.getCurrentTime())

// Задача 4 *
// Реализовать класс "Математика" с использованием статических методов "factorial" и "fibonacci". Метод "factorial" должен принимать число и возвращать его факториал, используя рекурсию. Метод "fibonacci" должен принимать число и возвращать последовательность Фибоначчи до этого числа, используя рекурсию.

class Mathematic {
  static factorial(number, result = 1) {
    if (number === 0 || number === 1) {
      return result
    }

    result *= number
    number -= 1

    return Mathematic.factorial(number, result)
  }
  static fibonacci(number, array = [0, 1]) {
    if (number === 0) return `The fibonacci sequence for ${number}: 0`
    if (number === 1) return `The fibonacci sequence for ${number}: 0, 1`

    if (array.length > number)
      return `The fibonacci sequence for ${number}: ${array.join(", ")}`

    array.push(array[array.length - 1] + array[array.length - 2])

    return Mathematic.fibonacci(number, array)
  }
}

console.log(Mathematic.factorial(5))

console.log(Mathematic.fibonacci(10))
