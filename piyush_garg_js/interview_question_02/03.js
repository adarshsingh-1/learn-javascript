async function getData() {
    return 1;
}

console.log("A");
console.log("B");
setTimeout(() => console.log("C"),0);

getData().then(() => console.log("Got the data"))

console.log("D");
console.log("E");
console.log("F");


//promis ke liye alag se task queue hoti hai usse micro task queue kehte hain
// toh phir micro task queue mein sabse pehle promise resolve hoga phir setTimeout ka callback execute hoga
// because micro task queue has higher priority than task queue 