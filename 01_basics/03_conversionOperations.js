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
console.log(stringNumber) //33
console.log(typeof stringNumber) //string