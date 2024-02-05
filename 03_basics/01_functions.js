// functions: function is nothing but a set of code which is being packed in a package.

// console.log("S");
// console.log("A");
// console.log("G");
// console.log("A");
// console.log("R");


// insted of this we can pack this all in a single package

function myName(){
    console.log("S");
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("R");
}

// myName    // this is reference
// myName()  // this is execution


//lets build a basic function of adding two numbers
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// addTwoNumbers()   // it will give NAN(Nt A Number) as there is no arguments passed
// addTwoNumbers(3,4);

// const result = addTwoNumbers(5,9)
// console.log("result ki value: ", result);   // this will give undefined because the funcyion is not returning a value it is just printing the sumof given values



function addTwoNumbers2 (number1, number2){
    // let result = number1 + number2;
    // return result;

    // or we can also do

    return number1 + number2;
}
const result = addTwoNumbers2(5,9)
// console.log("result ki value: ", result);





function loginUserMessage(userNmae = "Sam"){    // noe "Sam" is a default value
    if (userNmae === undefined){
        return "Please enter a Valid UserNmae";
    }
    return `${userNmae} had just logged in`;
}
// console.log(loginUserMessage("Sagar Sen"));
// console.log(loginUserMessage());





// ***************Lecture 19 ended ****************\\





// let there is a shooping cart where we have to add the price of added items on realtime. there we dont know how many arguments will come so how to define suvh functions?

function calculateCartPrice (...num1) {   // here it is called REST operator
    return num1;
}

// console.log(calculateCartPrice(200,300,400));  // it will return an array of all items



// how to pass and use objects in a function

const user = {
    userName: "Sagar",
    price: 299
}

function handleObject (anyObject){
    console.log(`userName is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user);
// we can also pass any object directly
// handleObject({
//     userName: "Sam",
//     price: 199
// });

// kets pass arrays to tyhe function

const myArray = [100,200,300,400,500];

function returnSecondValue (getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myArray));
// console.log(returnSecondValue([1000,2000,3000,4000]));