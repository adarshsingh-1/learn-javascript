foo = 30
console.log("FOO",foo);

var foo = 100;
console.log("FOO",foo);

// Your understanding is CORRECT! When the code executes, JavaScript creates a Global Execution Context with two phases:
// 1. Memory Creation Phase: var foo is hoisted and initialized as undefined
// 2. Code Execution Phase: Line by line execution
//    - foo = 30 (assigns 30 to the hoisted variable)
//    - console.log prints "FOO 30"
//    - var foo = 100 (reassigns the same variable to 100)
//    - console.log prints "FOO 100"
// This demonstrates hoisting, two-phase execution model, and variable reassignment.ˀ