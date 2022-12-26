function reverse(array){
  let reversedArray = []
  for(let i = array.length - 1; i>=0; i--){
    reversedArray.push(array[i])
  }
  return reversedArray
}

// console.log(reverse([1,2,3,4,5]))

function reverseInPlace(array){
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
}
let arr = [1, 2, 3, 4, 5]
console.log('Original array: ', arr)
reverseInPlace(arr)
console.log('Original array after reversing: ', arr)
