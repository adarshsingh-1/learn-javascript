const marvel_heroes = ["thor", "ironman", "hulk", "spiderman", "black widow"];
const dc_heroes = ["superman", "flash", "batman"]


// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[5][1]); // flash


//concatenation
// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);



//spread operator
// const all_new_heroes = [...marvel_heroes, ...dc_heroes] 
// console.log(all_new_heroes);


//flat method
const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_array = arr1.flat(Infinity)
//console.log(real_array);


//console.log(Array.isArray("adarsh"));
//console.log(Array.from("adarsh"));
console.log(Array.from({name:"adarsh", length: 6})); //tricky case


let obj = {0: "a", 1: "b", length: 2};
  
  //console.log(Array.from(obj)); 



let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1, score2, score3)); // [100, 200, 300]




