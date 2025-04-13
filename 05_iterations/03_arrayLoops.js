//for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.

//["","", "", "", ""]
//[{}, {}, {}]

const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  //console.log(number);
}

 //for of loop with strings
const str = "Hello";
for (const char of str) {
  //console.log(char);
}




//Maps Example
//map.size – returns total number of entries.
//map.keys() – returns all keys.
//map.values() – returns all values.
//map.entries() – returns all key-value pairs.


//create a map - Map is iterable — for...of works directly on its entries ([key, value]).
const map = new Map()
map.set('IN', "India")  
map.set('US', "United States")
map.set('UK', "United Kingdom")
map.set('AU', "Australia")


//getting values from map
// console.log(map.get('IN')); 
// console.log(map.get('US'));      
// console.log(map);

//uisng for of loop to iterate over map
for (const [key, value] of map) {
  //console.log(key, ':- ', value);
}


// Feature                 for...of
// Works on            Iterable objects (Array, Map, Set, String)
// Returns             Value of each item (not index/key)
// Best for            Values of array/map/strings
// Avoid for           Plain objects (for...in is better)































