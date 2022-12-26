function deepEqual(object1, object2){
  if(object1 != object2){
    return false
  }
  else{
    if (typeof object1 == typeof object2){
      if(Object.keys(object1).length){
        if (Object.keys(object1) == Object.keys(object2)){
          if (Object.values(object1) == Object.values(object2)){
            return true
          }
        }
      }
      return true
    }
  }
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
//-> true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

console.log(obj === {here: {is: "an"}, object: 2})