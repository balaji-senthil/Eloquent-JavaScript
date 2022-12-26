function findIndex(array, predicateFn){
  let index = -1
  for(let element of array){
    if(predicateFn(element)){
      index = array.indexOf(element)
      break
    }
  }
  return index
}

console.log(findIndex([3, 6, 9], e => e % 3 === 0))