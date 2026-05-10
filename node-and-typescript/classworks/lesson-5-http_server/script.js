const button = document.getElementById("button")
const text = document.getElementById("text")

const sendRequest = async () => {
  try {
    const response = await fetch("http://localhost:3333/")
    const data = await response.json()

    console.log(data)
    text.innerText = data.message
  } catch (error) {
    console.log(error)
  }
}

button.addEventListener("click", sendRequest)
