variable = 10;

(() => {
    foo = 100;
    console.log("Value of variable is ", variable);
    var foo = 100;
    variable = 20;
    console.log("Value of variable is ", variable);
    
    
})()

console.log(foo);
console.log("Value of variable is ", variable);
var variable = 30;


//This code demonstrates IIFE (Immediately Invoked Function Expression) and variable scoping. The variable = 10 creates a global variable, while inside the IIFE, var foo is hoisted and function-scoped. The foo = 100 assignment happens to the local hoisted variable, and variable = 20 modifies the global variable due to lexical scoping. When console.log(foo) executes outside the IIFE, it throws a ReferenceError because foo is not accessible in the global scope - it's confined to the IIFE's function scope. This demonstrates the difference between global variables and function-scoped variables in JavaScript.

// Each function creates its own execution context
// Variables declared inside a function stay inside that function
// When the function ends, its local variables are destroyedˀ