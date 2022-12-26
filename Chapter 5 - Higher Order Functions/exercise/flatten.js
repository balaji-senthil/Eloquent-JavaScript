function flattenArrays(nestedArray){
  let flatArray = []
  let stringifiedNestedArray = nestedArray.toString()
  for(let char of stringifiedNestedArray){
    if(Number(char) + 0 === Number(char)){
      flatArray.push(Number(char))
    }
  }
  return flatArray
}

let arrays = [[1, 2, 3], [4, 5], [6]]
console.log(flattenArrays(arrays))//O/P: [ 1, 2, 3, 4, 5, 6 ]