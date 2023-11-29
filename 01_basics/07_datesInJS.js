// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleString('en-IN'));

// console.log(typeof myDate)

//let myCreatedDate = new Date(2023, 0, 12);
//console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 12, 6, 23);
// console.log(myCreatedDate.toLocaleString())

 let myCreatedDate = new Date("01-12-2023");
// console.log(myCreatedDate.toLocaleString())

let myTampStamp = Date.now()

// console.log(myTampStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())


newDate.toLocaleString('default', {
    weekday: "long",
})