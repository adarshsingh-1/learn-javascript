// Arrays in JavaScript
// Arrays are used to store multiple values in a single variable.
// An array can hold multiple values of different data types.
// An array can hold values of any data type.

//ways of declaring array
const myHeroes = ["shaktiman", "batman", "superman"];
const num1 = new Array(1,2,3,4)


const myArray = [1, 2, 3, 4, 5];
//console.log(myArray[0]); 

//Array Methods

myArray.push(6); // Adds 6 to the end of the array
// myArray.push(7);
// myArray.pop();

// myArray.unshift(0)
// myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));
// console.log(myArray.indexOf(3));

const newArr = myArray.join()


//console.log(myArray); // [1, 2, 3, 4, 5, 6]
//console.log(typeof newArr); // object

//splice and slice methods

// slice  - copy krta hai original array ko nhe chhedta

let numbers = [10, 20, 30, 40, 50];

let sliced = numbers.slice(1,4)
//console.log("Sliced:", sliced);   // [20, 30, 40]
//console.log("Original:", numbers); // [10, 20, 30, 40, 50]


//splice -  Original array ko change karta hai (add/remove kar sakta hai)
let numbers1 = [10, 20, 30, 40, 50];
let spliced = numbers1.splice(1, 4);
//console.log("Spliced:", spliced); // [20, 30, 40, 50]
//console.log("Original:", numbers1); // [10]
