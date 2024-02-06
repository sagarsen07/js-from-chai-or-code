// this: this function is a function that is used to refer the current context

const user = {
    userName: "Sagar",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to the website`)
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "Sen";
// user.welcomeMessage();

// console.log(this);



// function chai() {
//     // console.log(this);    //this is not valid inside a function
//     let userName = "sagar";
//     console.log(this.userName);   // it will also return undefined
// }
// chai();

// hence we conclude that "this" cannot be used in the functions


//%%%%%%%%%%% more methods to define a function %%%%%%%%%%%%%

// const chai = function () {
//     let userName = "sagar";
//     console.log(this.userName);
// }
// chai();



//  ******** ARROW FUNCTION ******
// 1. remove the keyWord "function"
// 2. put a arrow after parenthesis()
const chai = ()=> {
    let userName = "sagar";
    console.log(this.userName);
}
// chai();



// () => {}    // basic syntax of a arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3,4));


//Implicit return: in this type of arrow function it had a single line defination thus there is no need of using {} and "return" it can be like

// const addTwo = (num1, num2) => num1+num2;
//                   OR
// const addTwo = (num1, num2) => (num1+num2);
// console.log(addTwo(3,4));

// using paranthesis is considered to be a good way as in line no 64. it helps in returning a object. e.g.

// const addTwo = () => {userName: "Sagar", age: 21};  
// it will generate error as curley braces{} are not allowed outside, in the implicit function.

const addTwo = () => ({userName: "Sagar", age: 21});    // it is the right way
// console.log(addTwo(5,6));
