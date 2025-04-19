const promise1  = new Promise(function(resolve, reject) {
    //do any task
    //BD calls , cryptography, file system, network calls
    setTimeout(function() {
       console.log('Async Task  completed');
       resolve()
    }, 1000);
})

promise1.then(function(){
    console.log("Promise consumed");
    
})

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
