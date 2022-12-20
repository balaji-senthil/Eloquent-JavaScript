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

function sum(numberList){
  let sum = 0
  for (let number of numberList){
    sum += number
  }
  return sum
}

console.log(sum(range(1, 1010101)))
