//promise async task perform krta hai
//resolve() → Jab kaam successfully complete ho jaaye, toh call hota hai.
//reject() → Jab error aata hai ya kaam fail hota hai, tab use hota hai. (yahan abhi use nahi hua)

const promise1  = new Promise(function(resolve, reject) {
    //do any task
    //BD calls , cryptography, file system, network calls
    setTimeout(function() {
       console.log('Async Task  completed');
       resolve()
    }, 1000);
})
// Jab promise successfully resolve ho jata hai, tab .then() chalta hai.
promise1.then(function(){
    console.log("Promise consumed");
    
})


// Point       Description
// Promise      JavaScript ka ek object jo asynchronous operations ko handle karta hai.
// setTimeout()   Asynchronous function use hua hai delay simulate karne ke liye.
// resolve()   Jab async kaam complete ho jaata hai, toh yeh promise ko fulfilled state me daal deta hai.
// .then()    Jab promise resolve ho jata hai, tab isme diya gaya callback run hota hai.
// reject()     Error handling ke liye hota hai (abhi use nahi kiya gaya).
// Reusability  Ek promise ek baar hi resolve ya reject hota hai. Uske baad fir se usko change nahi kar sakte.
// Chaining    .then() ke baad aur bhi .then() ya .catch() laga sakte ho.

// Promise chaining


new promise2(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async Task 2 completed');
        resolve()
    }
    , 2000);
}).then(function(){
    console.log("Promise 2 consumed");
})




const promise3 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({usename:"john", email:"john@hmail.com"})
    },1000)

});

promise3.then(function(user){
    console.log("User data: ", user);
    
});


//1. Promise creation:
// new Promise(...) ek asynchronous task banata hai.
// setTimeout 1 second delay ke baad task complete karta hai.

//2. Success Condition
// Agar error = false, toh promise resolve hota hai (success).
// Agar error = true, toh promise reject hota hai (fail).

//.then calling
//Pehla .then() user object return karta hai.
//Doosra .then() usme se username print karta hai.

//.catch()
//Agar koi error aata hai (jaise reject()), toh yeh chalta hai.

//.finally
// Yeh har case me chalega: resolve ho ya reject ho.
// Useful for cleanup or status logs.




const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"john", password: "1234"})
        }else{
            reject("Error: Something went wrong")
        }
    },1000)
})

promise4
  .then((user) => {
      console.log("User data: ", user);
      return user.username;
  })
  .then((username)=>{
      console.log("Username: ", username);
  })
  .catch(function(error){
      console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));


// Output agar error = true ho:
// Error: Something went wrong
// The promise is either resolved or rejected


// 🔎 Output agar error = false ho:
// User data:  { username: 'john', password: '1234' }
// Username:  john
// The promise is either resolved or rejected



const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"raju", password: "raju@gmail.com"})
        }else{
            reject("ERROR: Something went wrong RAJU")
        }
    },1000)
})    


async function consumePromise5(){
    try{
        const response  = await promise5
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromise5()


async function getAllUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // console.log(response);
        const data = await response.json()
        console.log(data);
    }catch(error){
        console.log("E", error);
    }
}


//.then and .catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log("Error: Something went wrong");
})




getAllUsers()


//** imp **/
// fetch() sirf network errors pe reject hota hai — HTTP errors (jaise 404) pe nahi, unhe .then() me response.ok ya response.status se handle karna padta hai. 

// 1.	fetch() kab reject hota hai?
// ➤ Jab network error ho (e.g., internet down, DNS error, ya CORS/permission issue).
// ➤ Tabhi .catch() chalega.


// 	2.	fetch() kab reject nahi hota?
// ➤ Agar server 404 (Not Found), 500 (Server Error) jaise HTTP error bhejta hai, tab bhi fetch() reject nahi hota.
// ➤ Us case me promise resolve ho jata hai, par response status ok nahi hota.


// 	3.	Toh kya karna chahiye?
// ➤ Tumhe .then() ke andar manually check karna padega:






// ⚙️ How fetch() works behind the scenes — Explained in Points:
// 	1.	fetch() Call Starts
// 	•	Jab fetch('something') likhte ho, ek network request initiate hoti hai.
// 	•	Ye asynchronous hoti hai aur turant ek Promise return karti hai.
// 	2.	Request Goes to Web APIs / Node
// 	•	Web Browser ya Node.js ke Web APIs network call handle karte hain.
// 	•	Actual data fetch karne ke liye background mein network request bheji jaati hai.


// 	3.	Network Request Triggered
// 	•	Do possible results:
// 	•	✅ Success (response mil gaya)
// 	•	❌ Network error (no internet, DNS fail, etc.)


// 	4.	Promise Resolution
// 	•	Agar response milta hai (even with 404), Promise resolve hoti hai.
// 	•	Agar network error hota hai, tabhi Promise reject hoti hai.


// 	5.	HTTP Errors Are Not Rejections
// 	•	HTTP status errors (like 404, 500) Promise ko reject nahi karte.
// 	•	Tumhe manually check karna padta hai:
// 	•	response.ok → true/false
// 	•	response.status → jaise 404, 500, etc.


// 	6.	Event Queues Are Created
// 	•	onFulfilled[] (success ke case mein)
// 	•	onRejection[] (network error ke case mein)
// 	•	Inmein data store hota hai jab response return karta hai.


// 	7.	Global Memory Reference
// 	•	Jo fetch() ke result ko tum kisi variable mein store karte ho (e.g., response), wo global memory mein promise ke form mein hota hai jab tak resolve/reject nahi hota.


// 	8.	Handle Result Using .then() / await
// 	•	Response ko access karne ke liye:
// 	•	.then(response => {...})
// 	•	ya await response (async function ke andar)


//  One-liner Summary:

// “fetch() sirf tab reject hoti hai jab network error ho; HTTP errors (404, etc.) ke liye tumhe manually response.ok ya response.status check karna padta hai.”