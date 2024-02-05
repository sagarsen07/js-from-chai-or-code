// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// but its functioning is different when used in scopes

if (true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);   // this will not work
// console.log(b);   // this will not work
// console.log(c);   // this will work properly and this is the problem that if it is declared inside the other scope then why is it working properly here


// same as in C++
//// lec 21 ended