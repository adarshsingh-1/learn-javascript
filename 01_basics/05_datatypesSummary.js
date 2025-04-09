//Two types of data types
//1. Primitive data types or call by value
//7 types of primitive data types
// ->string 
// ->number
// ->boolean
// ->null
// ->undefined
// ->bigint
// ->symbol


//javascript is a dynamically typed language 

const score = 33
const score1 = 33.3

const isLoggedIn = false 
const outSideTemp = null
let userEmail;

const id = Symbol("1234") //unique identifier
const anotherId = Symbol("1234") //unique identifier

//console.log(id === anotherId) //false;


const bigNumber = BigInt(1234567890123456789012345678901234567890) //bigint
//console.log(bigNumber) //1234567890123456789012345678901234567890n;

//console.log(typeof bigNumber) //bigint;



//2. Non-Primitive data types  or call by reference
// ->object
// ->array
// ->function
// ->date
// ->regex


const heres = ["shaktiman", "Nagraj", "Doga"];
console.log(typeof heres); //object

let myObject = {
    name: "adarsh",
    age: 23,
    isLoggedIn: false,
}


const myFunction = function(){
    console.log("hello world");
}
//console.log(typeof myFunction);


// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

