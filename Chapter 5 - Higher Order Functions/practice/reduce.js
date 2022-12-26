function reduce(array, reducerFn, seedValue = 0){
  let reducedValue = seedValue
  for(let element of array){
    reducedValue = reducerFn(reducedValue, element)
  }
  return reducedValue
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b))
