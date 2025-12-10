const colors = ["#ff0000", "#00ff00", "#0000ff"]

function changeBackgroundColor(elem) {
  setInterval(() => {
    const randomColor = colors[Math.floor(Math.random() * 3)]
    elem.style.backgroundColor = randomColor
  }, 1000)
}

const element = document.createElement("div")
element.style.width = "200px"
element.style.height = "200px"
document.body.appendChild(element)

changeBackgroundColor(element)
