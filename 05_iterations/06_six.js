const coding = ["js", "ruby", "python", "java", "cPlusPlus"];

const values = coding.forEach ( (item) =>{
    // console.log(item);
    return item;
} )

// console.log(values);
//That means forEach lop doesn't return any value



// Filter: it is a method on array in which a call back function is given inside it and a cndition is also alloted for the filtering.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = myNums.filter ( (x) => x > 4 );    // if the condition is too long or a multi line condition then we have to return the value by the return key word (implicit concept)
// console.log(newNum);

// const newNum = myNums.filter ((x) => {
//     return x>4;
// })
// console.log(newNum);



// doing the same thing by forEach loop
// const newNum = [];
// myNums.forEach( (x) => {
//     if (x > 4){
//         newNum.push(x);
//     }
// } )
// console.log(newNum);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks = books.filter( (bk) => bk.genre === 'History' );
//   const userBooks = books.filter( (bk) => {
//     return bk.publish >= 2000
// } );

//   console.log(userBooks);