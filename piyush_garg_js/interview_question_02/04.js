async function getData() {
    return 1;
}

console.log("A");
console.log("B");
setTimeout(() => console.log("C"),2 * 1000);

fetch('https://api.github.com/users/adarshsingh-1').then(() => console.log("Got the data")) //6seconds ke baad chalega

console.log("D");
console.log("E");
console.log("F");

//promises ka priority high hota hai setTimeout se
ChatGPT said:

// Jab yeh code execute hota hai, sabse pehle JavaScript engine ek global execution context banata hai aur code ko line-by-line execute karta hai. console.log("A"), console.log("B"), console.log("D"), console.log("E"), aur console.log("F") sab synchronous hain, isliye yeh turant execute hote hain aur output mein pehle aate hain. setTimeout() asynchronous hota hai, isliye uska callback background mein register hota hai via libuv, aur 2 seconds ke baad uska console.log("C") callback queue mein daala jata hai. Uske baad fetch() ek network request karta hai, jo asynchronous hai; jab response aata hai (maan lo ~6 seconds baad), tab uska .then() wala callback microtask queue mein chala jata hai. JavaScript ka event loop ensure karta hai ki pehle call stack empty ho, fir microtasks execute ho, aur uske baad task queue (setTimeout ka callback) execute ho. Isliye output order hoga: A B D E F (immediate), C (after 2 sec), Got the data (after ~6 sec).

// https://www.jsv9000.app/


// In JavaScript, starvation happens when the call stack is continuously occupied by long-running synchronous code, preventing the event loop from processing pending asynchronous tasks. This causes delayed or completely blocked execution of time-sensitive callbacks, affecting responsiveness and performance.


// Microtask Queue Starvation in JavaScript:

// Starvation can also occur when the microtask queue keeps refilling itself, preventing the task queue from ever being processed. This typically happens when a function in the microtask queue (like a .then() handler) keeps queuing more microtasks recursively — for example, by resolving more promises immediately within itself. Since the JavaScript event loop always clears the entire microtask queue before moving to the task queue, this creates a loop where tasks like setTimeout() or setInterval() callbacks (which live in the task queue) never get a chance to execute. This is called microtask starvation, and it can lead to unresponsive behavior in your app even if the main thread isn't technically blocked by synchronous code.