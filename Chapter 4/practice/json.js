let jsonObject = {
  numberProp: 1,
  stringProp: 'hello',
  arrayProp: [1, 2, 3],
  booleanProp: true,
  objectProp: {
    innerNumProp: 15,
    innerArrayProp: [0, 1],
    innerStringProp: 'I am inside',
    innerBooleanProp: false,
  }
}

const jsonStringifiedObject = JSON.stringify(jsonObject)
console.log(jsonStringifiedObject)
const jsonParsedObject = JSON.parse(jsonStringifiedObject).booleanProp
console.log(jsonParsedObject)