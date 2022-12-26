function some(array, predicateFn){
  for(let element of array){
    if(predicateFn(element)){
      return true
    }
  }
  return false
}

console.log(some([1,2,3], ele => ele > 2))//o/p: true
console.log(some([1,2,3], ele => ele > 4))//o/p: false