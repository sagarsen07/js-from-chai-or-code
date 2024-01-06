const name = "Sagar";
const repoCount = 50;

//console.log (name + repoCount + " Value");  // although it is a old and obsolated method

// new method of string concatination id called string interpolation. and it is done using backticks(``) and making place holders as follows

// console.log (`hello my name is ${name} and my rep count is ${repoCount}`);

//Another method of declaring strings (it is more prefered)
const gameName = new String('SagarSenJi');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log (gameName.length);
// console.log (gameName.toUpperCase());
// console.log (gameName.charAt(3));
// console.log (gameName.indexOf('a'));

const newString = gameName.substring(2,4);
// console.log(newString);

const anotherString = gameName.slice(-4, 8);
// console.log(anotherString) // it is same as subString but the only difference is that we can use negative value in slice for starting from back

const newStringOne = "    Sagar   ";
// console.log(newStringOne.trim());
// console.log(newStringOne);

const url = "https://sagar.com/sagar%20sen"
// console.log(url.replace('%20', '-'))


//find a substring in  a string
// console.log(url.includes('sen'))
// console.log(url.includes('senji'))


const newStr = "sagar-sen-is-a-good-boy";
// console.log (newStr.split('-'));