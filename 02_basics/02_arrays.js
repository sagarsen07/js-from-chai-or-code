const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "aquaman", "batman"]

// marvel_heroes.push(dc_heroes)   // this does not merege the array,,, it simply place the array dc_heroes into marvel_heroes (array in array)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3])

// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes)   // it still gives the same result because concat give the result in new array so we have to store the result in new array to get the desired output

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes) 