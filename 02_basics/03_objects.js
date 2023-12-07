// objects can be declared in two ways (1)literals type, (2) constructor type

// singleton (constructor se banane pe singleton banta hai)

// Object Literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Sagar",
    "full name" : "Sagar Sen",
    [mySym] : "mykey1",
    age: 23,
    location: "Ghaziabad",
    email: "sagar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// how to access objects?
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// changing the values of the objects
jsUser.email = "sagarsen@google.com";
// Object.freeze(jsUser)   // now no changes can be done in the object
jsUser.email = "sen@google.com";

// console.log(jsUser)


// in javaScript functions are treated same as variables

jsUser.greeting = function() {
    console.log("Hello JS User");
}
jsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo);
console.log(jsUser.greetingTwo());
