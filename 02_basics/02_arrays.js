const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "aquaman", "batman"]

// marvel_heroes.push(dc_heroes)   // this does not merege the array,,, it simply place the array dc_heroes into marvel_heroes (array in array)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3])

// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes)   // it still gives the same result because concat give the result in new array so we have to store the result in new array to get the desired output

const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes) 


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));