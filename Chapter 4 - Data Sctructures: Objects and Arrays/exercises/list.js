function range(start, end, step = 1){
  let numberList = []
  if(step < 0){
    for(let i = start; i >= end; i = i + step){
      numberList.push(i)
    }
  }
  for(let i = start; i <= end; i = i + step){
      numberList.push(i)
  }
  return numberList
}


function createLinkedList(array){
  let linkedList = []
  let node = {}
  for(let i = 0; i < array.length; i++){
    linkedList.push({...node, value: array[i], rest: array[i + 1] ? { value: array[i + 1] } : null})
  }
  return linkedList
}

console.log(createLinkedList(range(1, 20)))