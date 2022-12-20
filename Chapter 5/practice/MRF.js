/* 
  An example using map, reduce and filter HOF.
  Courtesy:
    - Generated from the Unicode 10 database and https://en.wikipedia.org/wiki/Script_(Unicode)
    - Extending my gratitude to the "SCRIPTS" Dataset provider(s) and https://github.com/marijnh/Eloquent-JavaScript/blob/master/code/scripts.js)
*/


function average(array){
  return array.reduce((a, b) => a + b) / array.length
}

//please replace SCRIPTS with the dataset provided in the above link
console.log(Math.round(average(
  SCRIPTS.filter(script => script.living).map(livingScript => livingScript.year)
)))