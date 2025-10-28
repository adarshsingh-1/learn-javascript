for(let i = 0; i<10; i++ ){
    setTimeout(() => console.log(i), 0);
}


// In this code, let creates a new block-scoped variable i for each iteration of the loop. So when setTimeout runs, it captures the correct value of i at that moment. This results in printing 0 to 9 as expected. Unlike var, which would print 10 ten times due to being function-scoped, let avoids closure-related issues. This demonstrates understanding of block scope, closures, and event loop timing in JavaScript

// Hinglish Explanation:
// Yeh code closure aur event loop ka classic example hai. Jab hum let use karte hain, toh har iteration mein nayi i banti hai (block-scoped). 
// Lekin agar var hota toh sab setTimeout callbacks same i variable ko reference karte aur 10 times 10 print hota.
// Let ke saath har iteration mein separate block scope create hota hai, isliye har callback apni unique i value capture karta hai.
// Event loop: Pehle for-loop complete hota hai (synchronous), phir setTimeout ke callbacks execute hote hain (asynchronous).
// Agar var hota: sab callbacks same memory location ki i ko point karte - result 10,10,10...
// Let ke saath: har callback different memory location ki i ko point karta - result 0,1,2,3...9

