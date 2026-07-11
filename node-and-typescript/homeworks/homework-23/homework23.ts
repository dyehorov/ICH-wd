/*
Задание 1
Обработка цепочки промисов с `async/await`
Создайте несколько функций, которые возвращают промисы с разным временем выполнения.
Напишите функцию, которая вызывает эти промисы поочерёдно, используя `await`, и обрабатывает результаты каждой операции.
Убедитесь, что цепочка промисов выполняется последовательно.
*/

function createDelayedMessage(message: string, delay: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${message} (${delay} ms)`)
    }, delay)
  })
}

async function runSequentialPromises(): Promise<void> {
  console.log("Task 1: sequential promise chain")

  const firstResult = await createDelayedMessage("First step completed", 1000)
  console.log(firstResult)

  const secondResult = await createDelayedMessage("Second step completed", 1500)
  console.log(secondResult)

  const thirdResult = await createDelayedMessage("Third step completed", 500)
  console.log(thirdResult)
}

/*
Задание 2
Асинхронная обработка данных из массива
Напишите функцию, которая принимает массив строк.
Каждая строка будет асинхронно обрабатываться (например, преобразовываться в верхний регистр с задержкой).
Используйте `Promise.all` для выполнения всех операций параллельно и вывода всех результатов.
*/

function transformToUpperCaseWithDelay(value: string): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value.toUpperCase())
    }, 700)
  })
}

async function processStringsInParallel(values: string[]): Promise<void> {
  console.log("Task 2: parallel string processing")

  const processedValues = await Promise.all(
    values.map(value => transformToUpperCaseWithDelay(value)),
  )

  console.log(processedValues)
}

/*
Задание 3
Обработка ошибки в параллельных промисах
Напишите функцию, которая вызывает три промиса параллельно с помощью `Promise.all`.
Один из промисов должен намеренно завершиться с ошибкой через `reject`. 
Обработайте эту ошибку с использованием `try/catch` и выведите соответствующее сообщение.
*/

function createSuccessfulPromise(name: string, delay: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${name} resolved successfully`)
    }, delay)
  })
}

function createFailedPromise(name: string, delay: number): Promise<string> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`${name} failed intentionally`))
    }, delay)
  })
}

async function runParallelPromisesWithError(): Promise<void> {
  console.log("Task 3: Promise.all error handling")

  try {
    const results = await Promise.all([
      createSuccessfulPromise("Promise 1", 800),
      createFailedPromise("Promise 2", 1200),
      createSuccessfulPromise("Promise 3", 600),
    ])

    console.log(results)
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Caught error: ${error.message}`)
      return
    }

    console.log("Caught unknown error")
  }
}

/*
Задание 4
Асинхронная функция с динамическим временем выполнения
Напишите асинхронную функцию, которая принимает массив чисел.
Для каждого числа создайте промис, который будет завершаться через количество миллисекунд, равное значению числа.
Используйте `Promise.all` для ожидания завершения всех промисов и вывода результатов в консоль.
*/

function waitByNumber(value: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Number ${value} finished after ${value} ms`)
    }, value)
  })
}

async function processNumbersWithDynamicDelay(values: number[]): Promise<void> {
  console.log("Task 4: dynamic delays")

  const results = await Promise.all(values.map(value => waitByNumber(value)))

  console.log(results)
}

async function main(): Promise<void> {
  await runSequentialPromises()
  await processStringsInParallel(["apple", "banana", "cherry"])
  await runParallelPromisesWithError()
  await processNumbersWithDynamicDelay([300, 1000, 500, 150])
}

main().catch(error => {
  console.error("Unexpected error:", error)
})
