// global scope - Jo variable function ke bahar ya kisi block ke bahar declare hua ho.
// block scope - Block scope ka matlab hai: jo variables kisi {} 
// block ke andar declare kiye gaye hain (let ya const se),
//  unhe sirf us block ke andar hi access kiya ja sakta hai.
//function scope - Function scope ka matlab hai: jo variables kisi function ke 
// andar declare kiye gaye hain (var, let, const se), wo sirf us
// function ke andar hi access ho sakte hain.
 
let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("inner value of a is ",a);
    
}



// console.log("outer value of a is ",a);
// console.log(b);
// console.log(c);


//important - In browser, var-declared variables become properties of the window object, 
// but in Node.js, even var is scoped to the file/module and not attached to the global object.


//nested scope
// In JavaScript, inner functions have access to variables defined in their outer lexical scope,
// but outer functions can’t access variables defined inside inner functions.


function one(){
    const userName = "hitesh"

    function two(){
        const app = "youtube"
        console.log(userName);
        
    }

    // console.log(app);

    // two()
    
}

one()


if(true){
    const userName = "adarsh"
    if(userName === "adarsh"){
        const website = " youtube"
        //console.log(userName + website);
    }
    // console.log(website); 
}
// console.log(userName);




//++++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++++++

// Explanation: Function Declarations are hoisted, so they can be used before they are declared in the code.
// Function Expressions are not hoisted, especially if declared using const or let.


// Function Declaration:

console.log(addOne(5));

function addOne(num){
    return num+1
}
addOne(5)


 //Function Expression:


const addTwo = function(num){
    return num+2
}
addTwo(5)