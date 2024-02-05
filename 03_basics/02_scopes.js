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



// function one(){
//     const userName = "Sagar";

//     function two (){
//         const website = "GitHub";
//         console.log(userName);
//     }
//     // console.log(website);
//     two();
// }
// one();


// if (true){
//     const userName = "Sagar";
//     if (userName === "Sagar"){
//         const website = "youtube";
//         console.log(userNmae + website);
//     }
//     console.log(website);   // it is a error
// }
// console.log(userName);   // it is also a error



// +++++++++++++++++ INTRESTING ++++++++++++++++++++++++

console.log(addOne(5));    // this will not give any error
function addOne (num){
    return num+1;
}


addTwo(5);     // but this will give a error because of it is stored in a variable hence it should be called after the function declaration. we will study more about it in the topic #hoisting
const addTwo = function(num){
    return num+2;
}