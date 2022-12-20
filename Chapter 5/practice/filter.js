function filter(array, fn){
  let filtered = []
  for(let element of array){
    if(fn(element)){
      filtered.push(element)
    }
  }
  return filtered
}

let arr = [1, 2, 3, 4, 5, 6]
console.log(filter(arr, e => e % 2 === 0))