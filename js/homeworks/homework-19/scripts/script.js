const counter = {
  count: 0,
  increment() {
    this.count++
  },
  decrement() {
    this.count--
  },
}

counter.increment()
counter.increment()
counter.increment()

console.log(counter.count)

counter.decrement()
counter.decrement()

console.log(counter.count)
