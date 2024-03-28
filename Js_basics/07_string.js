const name ="rahul"
const repoCount =50
// console.log(name + repoCount + " Value");  (This is Old version)

//new version (using backticks ` `  (string interpolation))
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rahul-Chahar')

console.log(gameName[0]); //=> R
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0,4) // -ve value not allowed
console.log(newString);

const anotherString = gameName.slice(1,-6)
console.log(anotherString);

const newStringOne ="   rahul    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rahul.com/rahul%20chahar"
console.log(url.replace('%20', '-'))

console.log(url.includes('rahul'))

console.log(gameName.split('-'));