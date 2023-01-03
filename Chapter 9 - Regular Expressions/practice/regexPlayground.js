const DATE_FORMAT_1 = /^[0-2]{1}[0-9]{1}[0-12]{2}-[0-9]{4}$/
const DATE_FORMAT_2 = /^[30-31]{1}[0-1]{1}-[0-12]{2}-[0-9]{4}$/
const US_DATE_FORMAT = /^[0-12]{2}-[1-31]{2}-[0-9]{4}$/
console.log(DATE_FORMAT_2.test("32-11-1974"))
let [_, month, date, year] = (/(\d{1,2})-(\d{1,2})-(\d{4})/.exec("11-22-19734"))
console.log(month)
console.log(date)
console.log(year)
// console.log(/[0-3][0-2]-\w-\d/.test("'11-Jan-1973'"))
// console.log(/\d{1,4}-\d/.test(1923-2))
// console.log(/colou?r/.test('color'))
// console.log(/colou?r/.test('colours'))
