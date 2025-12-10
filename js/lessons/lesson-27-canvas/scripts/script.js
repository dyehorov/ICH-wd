const canvas = document.querySelector("#canvas")

const context = canvas.getContext("2d")

// context.fillStyle = "red"
// context.fillRect(10, 10, 60, 45)

// context.fillStyle = "blue"
// context.fillRect(80, 10, 60, 45)

// context.fillStyle = "green"
// context.fillRect(150, 10, 60, 45)

// context.fillStyle = "blue"
// context.fillRect(25, 25, 100, 100)

// context.strokeStyle = "red"
// context.strokeRect(50, 50, 125, 25)

// context.beginPath()

// context.moveTo(70, 45)
// context.lineTo(150, 50)
// context.lineTo(90, 80)
// context.strokeStyle = "red"
// context.stroke()
// context.fillStyle = "blue"
// context.fill()

// context.closePath()

// context.beginPath()

// context.arc(75, 75, 25, Math.PI, 2 * Math.PI)
// context.fillStyle = "blue"
// context.fill()
// context.stroke()

// context.closePath()

// context.beginPath()

// context.arc(75, 75, 25, 0, 2 * Math.PI)
// context.fillStyle = "rgba(255,0,0,0.3)"
// context.fill()

// context.closePath()

context.fillStyle = "#FD0"
context.fillRect(0, 0, 75, 75)
context.fillStyle = "#6C0"
context.fillRect(75, 0, 75, 75)
context.fillStyle = "#09F"
context.fillRect(0, 75, 75, 75)
context.fillStyle = "#F30"
context.fillRect(75, 75, 75, 75)
context.fillStyle = "#FFF"

// for (let i = 0; i <= 7; i++) {
//   setTimeout(() => {
//     context.globalAlpha = i / 25
//     context.beginPath()
//     context.arc(75, 75, 10 * i, 0, Math.PI * 2)
//     context.fill()
//     context.closePath()
//   }, 50 * i)
// }

for (let i = 1; i <= 70; i++) {
  setTimeout(() => {
    context.globalAlpha = i / 2050
    context.beginPath()
    context.arc(75, 75, 1 * i, 0, Math.PI * 2)
    context.fill()
  }, 50 * i)
  setTimeout(() => {
    context.globalAlpha = i / 2050
    context.beginPath()
    context.arc(75, 75, 1 * i, 0, Math.PI * 2)
    context.fill()
  }, 100 * i)
  setTimeout(() => {
    context.globalAlpha = i / 2050
    context.beginPath()
    context.arc(75, 75, 1 * i, 0, Math.PI * 2)
    context.fill()
  }, 200 * i)
  setTimeout(() => {
    context.globalAlpha = i / 2050
    context.beginPath()
    context.arc(75, 75, 1 * i, 0, Math.PI * 2)
    context.fill()
  }, 300 * i)
}
