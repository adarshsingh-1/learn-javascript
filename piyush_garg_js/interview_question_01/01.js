
console.log("Value of Age is ", age);
var age = 20;
console.log("Value of Age is ", age);

// When this code executes, JavaScript's engine creates a Global Execution Context with two distinct phases. 
// During the Memory Creation Phase (also called Creation Phase), 
// the engine scans the entire code and hoists all var declarations, 
// allocating memory and initializing them as undefined. 
// This is why the first console.log outputs undefined even though it appears before the declaration. 
// Then during the Code Execution Phase, the engine executes line by line, 
// and when it reaches var age = 20, it assigns the actual value. 
// The second console.log then outputs 20. 
// This demonstrates JavaScript's hoisting mechanism and the two-phase execution model of the JavaScript engine.

// Jab hum node 01.js run karte hain, 
// JavaScript engine ek Global Execution Context banata hai jo do phases mein kaam karta hai. 
// Pehle Memory Creation Phase mein, saare var variables ko hoist karta hai aur unhe undefined set kar deta hai - isliye pehla console.log undefined print karta hai. 
// Phir Code Execution Phase mein line by line execute karta hai, age = 20 assign karta hai, toh dusra console.log 20 print karta hai. 
// Yeh hoisting aur JavaScript ke two-phase execution model ko demonstrate karta hai.

