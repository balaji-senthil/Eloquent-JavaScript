function every(array, predicateFn){
  for(let element of array){
    if(!predicateFn(element)){
      return false
    }
  }
  return true
}

console.log(every([1, 2, 3], e => e > 0))// o/p: true
console.log(every([1, 2, 3], e => e > 1))// o/p: false