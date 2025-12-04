/* https://www.codewars.com/kata/54edbc7200b811e956000556
https://www.codewars.com/kata/57eae20f5500ad98e50002c5
https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
https://www.codewars.com/kata/54ff3102c1bad923760001f3
https://www.codewars.com/kata/5467e4d82edf8bbf40000155
https://www.codewars.com/kata/554b4ac871d6813a03000035
https://www.codewars.com/kata/56747fd5cb988479af000028
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
https://www.codewars.com/kata/55fd2d567d94ac3bc9000064 */

// https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(sheep) {
  return sheep.filter(item => Boolean(item)).length
}

const sheeps = [undefined, null, false, true, true, false, null, undefined]

console.log(countSheeps(sheeps))

//https://www.codewars.com/kata/57eae20f5500ad98e50002c5

function noSpace(x) {
  return x.split(" ").join("")
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"))

//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data) {
  return data.reduce((accum, item) => {
    if (item[0] >= 55 && item[1] > 7) {
      accum.push("Senior")

      return accum
    }

    accum.push("Open")

    return accum
  }, [])
}

const dataList = [
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]

console.log(openOrSenior(dataList))

//https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"]

  return str.split("").filter(item => vowels.includes(item)).length
}

console.log(getCount("abracadabra"))

//https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n) {
  return ("" + n)
    .split("")
    .sort((a, b) => b - a)
    .join("")
}

console.log(descendingOrder(0))

//https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers) {
  if (numbers.split(" ").length === 1) return numbers + " " + numbers

  return numbers
    .split(" ")
    .sort((a, b) => b - a)
    .filter((item, index, array) => index === 0 || index === array.length - 1)
    .join(" ")
}

console.log(highAndLow("42"))

//https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
  if (s.length === 1) return s[0]

  if (s.length % 2 !== 0) return s[Math.floor(s.length / 2)]

  return s[s.length / 2 - 1] + s[s.length / 2]
}

console.log(getMiddle("testing"))

//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s) {
  return s.split(" ").reduce((accum, item) => {
    if (accum.length > item.length) {
      return (accum = item)
    }

    return accum
  }).length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

/**
              1
           3     5
        7     9    11
    13    15    17    19
 21   23    25    27    29

*/

function rowSumOddNumbers(n) {
  const firstNumberInTheRow = n ** 2 - n + 1
  const arrayOfTheRow = []
  let num = 1

  for (let i = firstNumberInTheRow; num <= n; i++) {
    if (i % 2 !== 0) {
      arrayOfTheRow.push(i)

      num++
    }
  }

  return arrayOfTheRow.reduce((accum, item) => {
    return (accum += item)
  }, 0)
}

console.log(rowSumOddNumbers(42))

/*
 1 3 7 13 21 each step is multiplied by 2, then we can say an​=n2−n+1 then 


 */
