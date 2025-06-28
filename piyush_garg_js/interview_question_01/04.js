var variable = 10;
 (() => {
    console.log("Value of variable is ", variable);

    variable = 20;

    console.log("Value of variable is ", variable);
    
 })();

 console.log("Value of variable is ", variable);

 variable = 30;

 console.log("Value of variable is ", variable);
 
 

// This code demonstrates IIFE (Immediately Invoked Function Expression) and variable scoping in JavaScript. The var variable = 10 creates a global variable in the global scope. The IIFE (() => {})() executes immediately and has access to the global variable through lexical scoping. Inside the IIFE, variable = 20 modifies the same global variable (not creating a new local variable), so the change persists outside the IIFE. All four console.log statements access the same global variable, outputting: 10, 20, 20, 30. This demonstrates closure, lexical scoping, and how arrow functions inherit scope from their enclosing context without creating their own execution context.ˀ