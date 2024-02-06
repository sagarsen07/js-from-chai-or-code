// Immediately Invoked Function Expression (IIFE)


// we basicly invoke a function like this
// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai();

// but what if we wanted to execute the function immedieately just as soon as it is declared. in can be done with the paranthesis concept of the implict arrow function that we learned in the last lecture.

// (function chai() {
//     console.log(`DB CONNECTED`);
// }) ();

// so the basic synrax is
// () ()
// 1. first set of paranthesis is of function defination.
// 2. second set of paranthesis is of function execution.
// IIFE should always be ended with a semi colon)(;) to stop the execution

// IIFE in arrow functions
// ( () => {
//     console.log(`DB CONNECTED TWO`)
// }) ();

// ( (name) => {                             
//     console.log(`DB CONNECTED TWO ${name}`)
// }) ("Sagar");
// // these were simple IIFE


// ( function chai (){
//     console.log(`NAMED IIFE`)
// }) ();
// // This is named IIFE