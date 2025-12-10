class Shape {
  draw() {
    console.log("Drawing a shape...")
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("Drawing a reactangle")
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle")
  }
}

const array = [
  new Rectangle(),
  new Circle(),
  new Rectangle(),
  new Circle(),
  new Circle(),
]

array.forEach(item => item.draw())
