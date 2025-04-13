//for of loop

const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  //console.log(number);
}

 //for of loop with strings
const str = "Hello";
for (const char of str) {
  //console.log(char);
}




//Maps
//map.size – returns total number of entries.
//map.keys() – returns all keys.
//map.values() – returns all values.
//map.entries() – returns all key-value pairs.
//create a map
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





//for of loop with objects
const person = {
  name: "John",
  age: 30,
  city: "New York",
};
for (const key of Object.keys(person)) {
  console.log(key, person[key]);
}


























