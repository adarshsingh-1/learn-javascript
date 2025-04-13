// Execution Context in JavaScript
//JavaScript chalti hai through something called an Execution Context, 
// jo decide karta hai code kaise execute hoga, 
// kaunse variable kahan accessible hain, etc.

// Types of Execution Context
// 	1.	Global Execution Context (GEC)
// 	2.	Function Execution Context (FEC)
// 	3.	Eval Execution Context (rarely used)


// 1. Global Execution Context - jab js file run hoti hai, sabse phle GEC create hota hai
// Ismein this global object ko refer krta hai
//Browswer mein: this->window
//Node.js mein :{}(empty object)
//Use - Variables, functions jo global level pe declare hain unko memory allocate karta hai


//2. Function Execution Context (FEC)
//Jab kabhi koi function call hota hai, ek naya Execution Context create hota hai
// Yeh GEC ke upar stack hota hai (LIFO manner)


//3.Eval Execution Context
//JavaScript ka eval() function ke liye hota hai
//Rarely used in real-world (aur security reasons ke wajah se avoid kiya jaata hai)


// Execution Stack (Call Stack) - Jaise hi function execute ho jaata hai, uska context stack se pop ho jaata hai.
// |-------------------------|
// |  addTwo() FEC           |
// |-------------------------|
// |  Global Execution (GEC) |
// |-------------------------|


//*imp*
// JavaScript code runs inside Execution Contexts, starting with the Global Execution Context, 
// and for each function call, 
// a new Function Execution Context is created and managed using a Call Stack.




// {} -> memory creation phase or executoin phase

//For example:
let val1   = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1+num2
    return total
}

let result = addNum(val1, val2)
let result2 = addNum(19, 2)


// Execution Flow 
//1. Global Execution Context(GEC)
// Sabse pehle JavaScript Engine create karta hai Global Execution Context in 2 phases:


// Phase 1: Memory Allocation Phase (Hoisting)
// val1      → undefined  
// val2      → undefined  
// addNum    → function definition  
// result    → undefined  
// result2   → undefined
// Is phase mein variables undefined hote hain aur functions memory mein poori body ke saath load ho jaate hain.



// Phase 2: Execution Phase
val1 = 10  
val2 = 5  
result = addNum(val1, val2) // triggers Function Execution Context  
result2 = addNum(19, 2)     // triggers another Function Execution Context
// Jab addNum() call hota hai, ek naya Function Execution Context (FEC) create hota hai.



// Function Execution Context:
//First Call: addNum(val1, val2) → addNum(10, 5)

//1.Function Memory Phase:
// num1   → undefined  
// num2   → undefined  
// total  → undefined


//2.Function Execution Phase:
// num1 = 10  
// num2 = 5  
// total = 10 + 5 = 15  
// return 15



//FEC destroy hota hai → result = 15 ho jaata hai
//Ye value GEC ke result variable mein store hoti hai

//Second Call: addNum(19, 2) - Same steps repeat hote hain with num1 = 19, num2 = 2, result → 21, and FEC destroy ho jaata hai.



//Call Stack in Action(LIFO)
// |----------------------|  
// | addNum(19, 2) FEC     |  
// |----------------------|  
// | addNum(10, 5) FEC     |  
// |----------------------|  
// | Global Execution      |  
// |----------------------|  


// Jaise hi function execute ho jaata hai → pop ho jaata hai stack se


//Concept               Explanation


// Execution Context       JS ka environment jisme code run hota hai
// Memory Phase            Sab variables/functions ko allocate kiya jata hai
// Execution Phase         Real execution, values assign hoti hain
// Call Stack              LIFO manner mein Execution Contexts handle karta hai
// Function Context        Har bar function call hone par naya context banta hai
// Scope                   Har Execution Context ka apna local scope hota hai




//*imp*
// JavaScript uses a two-phase process (memory + execution) and manages contexts using a Call Stack to handle execution, 
// especially with function calls






