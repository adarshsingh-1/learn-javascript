age = 100;

console.log("Value of Age is ", age);

let age = 30;


// This code throws a ReferenceError because let variables exhibit different hoisting behavior compared to var. While let declarations are hoisted to the top of their scope, they remain in a Temporal Dead Zone (TDZ) and stay uninitialized until the actual declaration line is reached. Unlike var which gets initialized as undefined during the Memory Creation Phase, let variables cannot be accessed before initialization. When we try to assign age = 100 and access it via console.log, JavaScript throws 'Cannot access age before initialization' error. This demonstrates let's block-scoping and TDZ mechanism which prevents accidental variable usage and makes code more predictable.



// Hinglish: Yeh code ReferenceError throw karta hai kyunki let variables ka hoisting behavior var se different hota hai. Let declarations hoist hote hain lekin Temporal Dead Zone (TDZ) mein rehte hain aur uninitialized state mein rehte hain jab tak actual declaration line nahi aati. Var ki tarah undefined nahi bante Memory Creation Phase mein - let     variables ko initialization se pehle access nahi kar sakte. Jab hum age = 100 assign karte hain aur console.log mein access karte hain, JavaScript 'Cannot access age before initialization' error throw karta hai. Yeh let ki block-scoping aur TDZ mechanism ko demonstrate karta hai jo accidental variable usage prevent karta hai.


ˀ