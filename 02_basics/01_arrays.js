// arrays

// const myArr = [0,1,2,3,4,5,6,7,8,9,true,"Sagar"]

// const myArr = [9,8,7,6,5,4,3,2,1]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[0])


//++++++++++ Array Methods +++++++++++++

// myArr.push(0)
// myArr.pop()

// myArr.unshift(10)
// myArr.unshift(11)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.includes(-1))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// // what is the Change in both of them?
// //ans: change occurs in their data types
// console.log(typeof myArr)   // it is a object as array are always a object
// console.log(typeof newArr)   // but it is of string type


//+++++++++ slice, splice ++++++++++
const myArr = [9,8,7,6,5,4]

console.log("Before Slice ", myArr);
const myn1 = myArr.slice(1,3)
console.log("Slice array ",myn1)
console.log("After Slice ", myArr);

console.log("Before Splice ", myArr)
const myn2 = myArr.splice(1,3)
console.log("Splice Array ", myn2)
console.log("After Splice ", myArr)