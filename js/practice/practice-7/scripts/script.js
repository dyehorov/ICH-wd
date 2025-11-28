const BASE_URL = "https://jsonplaceholder.typicode.com"

// 1. Необходимо сделать запрос к API и получить данные об альбоме(albums) по его идентификатору. Используйте fetch для получения данных. Обработайте возможные ошибки с помощью try/catch. Используем https://jsonplaceholder.typicode.com/albums Получить данные об 1, 7 и 12 альбоме и все полученную информацию используйте для отрисовки карточек на веб странице.
// <!-- getAlbumData -->

async function getAlbumsData() {
  try {
    const response = await fetch(`${BASE_URL}/albums`)
    if (!response.ok) {
      throw new Error("Failed to fetch users")
    }
    const data = await response.json()

    const specificAlbums = data.filter(
      album => album.id === 1 || album.id === 7 || album.id === 12
    )

    return specificAlbums
  } catch (error) {
    console.log(error)
  }
}

const renderAlbums = async () => {
  const albums = await getAlbumsData()

  document.body.innerHTML = albums
    .map(item => {
      return `<p>Album id: ${item.id}</p><p>Album title: ${item.title}</p>`
    })
    .join("")
}

// renderAlbums()

//2. Необходимо задержать выполнение функции на 2 секунды с помощью setTimeout. Используйте async/await для выполнения этой задержки.
//<!-- delayExecution -->

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

const delayExecution = async ms => {
  await delay(ms)
  await renderAlbums()
}

delayExecution(2000)

// 3. Необходимо написать функцию parseJSON, которая должна распарсить строку '{"name": "John", "age": 30}' в формате JSON. Обработайте возможные ошибки с помощью try/catch.
// <!-- parseJSON -->

function parseJSON(json) {
  try {
    const data = JSON.parse(json)

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

parseJSON('{"name": "John", "age": 30}')

// 4. Необходимо создать функцию getRandomNumber, которая возвращает промис, который будет возвращать случайное число с задержкой в 1 секунду, таким образом мы имитируем некоторый процесс обрабатывающий логику генерации случайного числа. Используйте async/await для ожидания выполнения промиса. Не забудьте обработать асинхронный вызов функции.

//   <!-- getRandomNumber -->
//  <!-- processRandomNumber -->

function getRandomNumber() {
  return new Promise(resolve => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100)

      resolve(randomNumber)
    }, 1000)
  })
}

async function processRandomNumber() {
  try {
    const randomNumber = await getRandomNumber()

    if (!randomNumber && randomNumber !== 0) {
      throw new Error("Did not get any number")
    }

    console.log(`Random number: ${randomNumber}`)
  } catch (error) {
    console.log(error)
  }
}

processRandomNumber()

//Задача 5 ** Необходимо получить HTML-код веб-страницы по ее URL и распарсить его для извлечения нужной информации Например Title. Используйте fetch для загрузки HTML и DOMParser для парсинга. Для выполнения данного задания может потребоваться расширение google chrome CORS Unblock.

async function parseHTML(url) {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error("Error to fetch")
    }

    const data = await response.text()

    const parser = new DOMParser()
    const doc = parser.parseFromString(data, "text/html")

    const title = doc.querySelector("title").textContent

    return title
  } catch (error) {
    console.log(error)
  }
}

parseHTML("https://www.heroku.com").then(title => console.log(title))
