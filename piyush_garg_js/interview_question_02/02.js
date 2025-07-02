console.log("A");
console.log("B");
setTimeout(() => console.log("C"),0);
console.log("D"); 
console.log("E");
console.log("F");


// Sabse pehle jab node 02.js command terminal mein run karte hain, to Node.js engine ek global execution context create karta hai aur code ko line-by-line execute karta hai.
// Line 1:
//     console.log("A") execute hota hai, aur terminal par A print hota hai.
// Line 2:
//     console.log("B") execute hota hai, aur terminal par B print hota hai.
// Line 3:
//     setTimeout(() => console.log("C"), 5000) encounter hota hai.

//         Ye setTimeout() function asynchronous hota hai, aur Node.js ke andar ye browser ke Web APIs se nahi, balki libuv library ke through handle hota hai.

//         Callback function (() => console.log("C")) ko Node.js ek timer ke saath register karta hai aur is function ko call stack se hata deta hai.

//         Ye timer background mein 5 seconds ke liye chalne lagta hai.
// Line 4:
//     console.log("C") turant execute hota hai, aur terminal par C print hota hai (ye immediate C hota hai, jo confusion create kar sakta hai).

//     After 5 seconds:

//         Jab timer complete ho jata hai, callback function (() => console.log("C")) ko task queue mein bhej diya jata hai.

//         Node.js ka Event Loop continuously check karta hai ki call stack khali hai ya nahi.

//         Jaise hi call stack empty milta hai, Event Loop callback ko call stack mein daalta hai.

//         Ab ye callback execute hota hai, aur terminal par dusra C print hota hai (jo 5 sec delay ke baad aata hai).











// How does the JavaScript engine handle time-consuming tasks and what is the role of the call stack, event loop, and callback queue in that process?

// JavaScript engine ke andar Call Stack ek core component hota hai jo hamare code ko execute karta hai — ye basically ek LIFO (Last In First Out) stack hai jahan functions push aur pop hote hain.

// Call stack kisi function ka intezaar nahi karta. Iska kaam hai jo bhi function aaye usko turant execute karna ya agla line run kar dena. For example, agar humare paas ek function hai jo 5 seconds ka time leta hai (like a heavy calculation or setTimeout()), aur uske baad ek console.log() statement hai, to call stack us function ko wait nahi karega. Wo turant agla console.log() run kar dega.

// Ab aisi situation mein, humein ek aise architecture ki zarurat hoti hai jo time-consuming ya asynchronous tasks ko manage kare. Yahan par Event Loop aur Callback Queue ka role aata hai.

// Jab koi asynchronous operation hota hai jaise setTimeout(), to JavaScript engine us operation ko turant execute nahi karta. Ye operation ko Web APIs (browser) ya libuv (Node.js) ko de deta hai, jo timer ya async task ko background mein handle karta hai. Jab wo task complete hota hai (jaise 5 seconds baad), to uska callback function Callback Queue mein daal diya jata hai.

// Phir Event Loop continuously monitor karta hai ki kya Call Stack empty hai. Jaise hi call stack empty hota hai, Event Loop callback queue se function uthata hai aur call stack mein daal kar usko execute karta hai.

// Event Loop only pushes when the call stack is empty