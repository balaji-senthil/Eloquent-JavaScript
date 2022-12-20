function reduce(array, reducerFn, start){
  let currentElement = start
  for(let element of array){
    currentElement = reducerFn(currentElement, element)
  }
  return currentElement
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0))
