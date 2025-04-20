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

})

promise3.then(function(user){
    console.log("User data: ", user);
    
})


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
        let error = false;
        if(!error){
            resolve({username:"john", password: "1234"})
        }else{
            reject("Error: Something went wrong")
        }
    },1000)
})



promise4.then((user) => {
    console.log("User data: ", user);
    return user.username
}).then((username)=>{
    console.log("Username: ", username);
    
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))






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
