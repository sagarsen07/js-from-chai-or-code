// Singleton or constructor


// const tinderUser = new Object()      // it is a singleton object
const tinderUser = {}     // it is a non singleton user

tinderUser.id = "123abc"
tinderUser.name = "Sagar"
tinderUser.isLogedIn = false

// console.log(tinderUser)

//NOW


const regularUser = {
    email: "sagar@google.com",
    fullNmae: {
        userFullName: {
            firstName: "Sagar",
            lastName: "Sen"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullNmae)
// console.log(regularUser.fullNmae.userFullName.firstName)


///////// COMBINING OBJECTS ////////////

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

// const obj3 = {obj1, obj2}   
// console.log(obj3)// this will not work. same as array it will also put a object in another object

// const obj3 = Object.assign ({}, obj1, obj2);
// console.log(obj3);    // this is correct method method

//                 OR        there is another method too

const obj3 = {...obj1, ...obj2};
console.log(obj3)
