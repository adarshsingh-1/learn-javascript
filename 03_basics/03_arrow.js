//important * - Browser mein jab this ko global scope mein call karte ho ⇒ this refers to window object
//	window = browser ka global object

//Environment   Output            Explanation
//Browser.  window object          Kyunki browser mein global scope ka object = window
//Node.js.     {} (empty object)  Kyunki Node mein global scope alag handle hota hai


const user = {
    userName:"adarsh",
    price:999,

    welcomeMsg: function(){
        console.log(`${this.userName}, welcome to website `);
        // console.log(this);
        

        
    }
}


// user.welcomeMsg()
// user.userName = "raj"
// user.welcomeMsg()

// console.log(this);


// function one(){
//     let userName = "adarsh"
//     console.log(this);
    
// }


// const chai = function (){
//     let userName = "adarsh"
//     console.log(this); 
// }


// const one = () => {
//     let userName = "adarsh"
//     console.log(this); 
// }

// one()


//basic arrow function - explicit return
// const addTwo =() => (num1, num2) => {
//     return num1+num2
// }


//implicit return
// const addTwo = (num1, num2) => num1+num2
// Brackets () ka use kiya hai ⇒ Implicit return of the expression


const addTwo = (num1, num2) => (num1+num2) 

// In arrow functions, wrap {} in parentheses when returning an object directly — 
// otherwise it’s treated as a code block.
const name = (num1, num2) => ({username:"adarsh"})
// Object ko return karte waqt () ke andar {} likhna zaroori hai in arrow functions



console.log(addTwo(2,3));





