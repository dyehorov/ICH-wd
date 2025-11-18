// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

const string = "35231"

function createReversedArrayFromString(string) {
  return string.split("").reverse()
}

const reversedArray = createReversedArrayFromString(string)

console.log(reversedArray)

console.log(createReversedArrayFromString("0"))

function reversedArrayFromString(string) {
  const array = []

  for (let i = 0; i < string.length; i++) {
    array.unshift(Number(string[i]))
  }

  return array
}

console.log(reversedArrayFromString("35231"))
console.log(reversedArrayFromString("0"))
