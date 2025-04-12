//Imediately invovked function expression
// “An IIFE is a function that runs immediately after being defined. 
// It’s mainly used to avoid polluting the global scope and to create private variables.”




//using arrow function
(function code(){
    //named iife
    console.log(`DB CONNECTED`);
    
})();
//two iife likhne se phle semi colon lagana chiaye

( (name) => {
    //simple iife or unnamed 
    console.log(`DB CONNECTED TWO ${name}`);
    
})('hitesh')