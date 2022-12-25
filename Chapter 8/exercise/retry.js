//FOR SOME FUN: Uncomment Ln 12 and 16 to count the luck(function calls made to attain the desired result) :p

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}
// let callerCount = 1
function reliableMultiply(a, b) {
  let result
  try{
    // console.log(`Calling for the ${callerCount++}th time`)
    result = primitiveMultiply(a,b)
  }catch(error){
    if(error instanceof MultiplicatorUnitFailure){
      result = "MultiplicatorUnitFailure"
    }
    else throw error
  }finally{
    while(isNaN(result)){
      result = reliableMultiply(a, b)
    }
    return result
  }
}


console.log(reliableMultiply(8, 8))