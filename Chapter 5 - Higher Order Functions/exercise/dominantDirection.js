/* 
  Spoiler Alert: Ugly but works!
  Courtesy:
    - Generated from the Unicode 10 database and https://en.wikipedia.org/wiki/Script_(Unicode)
    - Extending my gratitude to the "SCRIPTS" Dataset provider(s), countBy, characterScript helper functions and https://github.com/marijnh/Eloquent-JavaScript/blob/master/code/scripts.js)
*/


function dominantDirection(text) {
  const languageArray = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");
  let directionsList = []
  directionsList.push(languageArray.map(language => SCRIPTS.filter(script => script.name === language.name).map(x => x.direction)))
  return(directionsList.flat(2).sort((a,b) =>
        directionsList.filter(v => v===a).length
      - directionsList.filter(v => v===b).length
  ).pop())
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl