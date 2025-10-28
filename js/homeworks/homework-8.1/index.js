// 1
function productOfElements(array) {
  let product = 1;
  for (const element of array) {
    product *= element;
  }
  return product;
}

console.log(productOfElements([1, 2, 3]));

// 2
function sumOfElements(array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}

console.log(sumOfElements([1, 2, 3, 4, 5]));
