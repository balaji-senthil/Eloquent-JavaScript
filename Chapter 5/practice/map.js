function map(array, fn){
  let result = []
  for(let element of array){
    result.push(fn(element))
  }
  return result
}

console.log(map([1, 2, 3], e => e * e))