// *********** For in loop *************\\
const myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

// objects are iteratable through forin loop
// for (const key in myObject){
//     console.log(`${key} refers to ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"];
// for (const key in programming){
//     console.log (key);                  // this will give position
//     console.log (programming[key]);     // this will givev value
// }


const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India");

// for (const key in map){
//     console.log(key);
// }
// ERROR: map are not iteratable by this method