const score = 400

const balance = new Number(100);
console.log(balance);

console.log(balance.toString()); // used to convert the variable into string

console.log(balance.toFixed(3));  // used to fix the number of decimal values in a variable

const otherNumber = 23.4541;
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));