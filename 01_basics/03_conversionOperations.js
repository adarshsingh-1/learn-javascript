let age1  =  33
//console.log(typeof age1) //number;

let age2  =  "33"
//console.log(typeof age2) //string;

let score  = "abcd"
let valueInNumber = Number(score) //convert string to number
//console.log(typeof valueInNumber) //number
//console.log(valueInNumber) //NaN


//"33" => 33
//"33abc" => NaN
//"true" => 1; false => 0


let isLoggedIn = "abc" 

let booleanIsLoggedIn = Boolean(isLoggedIn) //convert number to boolean
//console.log(booleanIsLoggedIn) //true


//1 => "true"; 0 => "false"
//"" => false
//"adarsh" => true


let number = 33

let stringNumber = String(number) //convert number to string
//console.log(stringNumber) //33
//console.log(typeof stringNumber) //string


// *********************************** Operation ***************************************



let value = 3;
let negValue = -value 

// console.log(negValue) 

// console.log(2+2);//addition
// console.log(2-2);//subtraction
// console.log(2*2);//multiplication
// console.log(2/2);//division
// console.log(2**2); //exponential
// console.log(2%2); //modulus


let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2 //concatenation
//console.log(str3) //hello world


//console.log("1" + 2); //12
//console.log(1 + "2"); //12
//console.log("2"+ "3");//23
//console.log("1" + 2 + 2 );// 122
//console.log("1" + (2 + 2) );// 12
//console.log(1 + "2" + 3 );// 123
//console.log(1 + 2 + "2" );// 32



/*
if the string is a the start of the string then it will be concatenated
if the string is in the middle of the string then it will be concatenated
if the string is at the end of the string then it will be added
*/


console.log(+true); //1
console.log(+""); //0




//post-increment
let num1 = 5;
console.log("Before increment:", num1);
let postIncrementValue = num1++;
console.log("After increment:", num1);


//pre-increment
let num2 = 5;
console.log("Before increment:", num2);
let preIncrementValue = ++num2; // Pre-increment operator
console.log("After increment:", num2);