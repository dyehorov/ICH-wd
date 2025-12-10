class CopyEntity {
  static copyObject(obj) {
    return JSON.parse(JSON.stringify(obj))
  }
}

const arr1 = [1, 2, 3]
const arr2 = CopyEntity.copyObject(arr1)

arr1[0] = 999

console.log(arr1)
console.log(arr2)

const obj1 = { name: "Tom", age: 22 }
const obj2 = CopyEntity.copyObject(obj1)

console.log(obj1)
console.log(obj2)
