//truthy and falsy values

const userEmail = []
if(userEmail){
    console.log("Email is present")
}
else{
    console.log("Email is not present")
}



// In JS, even "false" and "0" (strings) are truthy because they are non-empty strings.
// Always be cautious when checking for conditions — use strict comparisons when needed.




//falsy values - These values behave as false when used in a boolean context (like inside if, while, etc.).
// false, 0, "", -0, BigInt 0n , null, undefined, NaN


//truthy values - All values except the falsy ones are truthy. Even values that may look falsy at first can actually be truthy.
// "0", " ", "false", [], {}, -5, 5n, true, Symbol(""), function(){}, new Date(), -1, Infinity, -Infinity


// if(userEmail.length === 0){
//     console.log("Email is present");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    //console.log("Object is empty");
}



let val1;
//Nullish Coalescing Operator (??) in JavaScript
//Syntax
// let result = value1 ?? value2;


// Don’t confuse ?? with || (logical OR).
// || returns first truthy value, while ?? returns first non-null/undefined value.


// val1 = 10 ?? 14
val1 = null ?? 14
val1 = undefined ?? 14

 
// console.log(val1); // 14

val2 = null ?? 10 ?? 11

// console.log(val2);




//Terniary Operator 
// condition ? true : false

const price  = 100
price>=80 ? console.log("price is greater than 80") : console.log("price is less than 80")