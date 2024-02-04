// Singleton or constructor


// const tinderUser = new Object()      // it is a singleton object
const tinderUser = {}     // it is a non singleton user

tinderUser.id = "123abc"
tinderUser.name = "Sagar"
tinderUser.isLoggedIn = false

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

const obj3 = {...obj1, ...obj2};   // it is the most used method
//console.log(obj3)


//           Array of Objects    -------------
const user = [
    {
        id: 1,
        email: "s@yahoo.com"
    },
    {
        id: 2,
        email: "sa@yahoo.com"
    },
    {
        id: 3,
        email: "sag@yahoo.com"
    },
    {
        id: 4,
        email: "saga@yahoo.com"
    },
]

// console.log(user[1].email);
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




//////////////////// OBJECT DESTRUCTURING ??????????

const  course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Sagar"
}

// console.log(course.courseInstructor)
// there is another efficient method exist tahat is extraction method
// in this method we extract the value from the object
//e.g.

// const {courseInstructor} = course
// console.log(courseInstructor);

// we can also set another temproary name to print it
const{courseInstructor: teacher} = course
console.log(teacher);






// JSON
// json is a object that doesnt have a name