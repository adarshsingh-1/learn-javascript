//singleton - Ek hi object banega, baar-baar use hoga
//object.create //comstructor metho
//object literal


const mySym = Symbol("key1")


const user = {
    //key: value pair 
    name: "adarsh",
    "full name": "adarsh kumar",
    [mySym] : "myKey1",
    age: 23,
    email:"adarsh@gmail.com",
    location:"kolkata",   
    isActive: true,
    hobbies: ["reading", "gaming"],
    lastLoginDays:["monday", "tuesday", "wednesday"], 
}



//accessing object properties
//dot notation
//console.log(user.name); //adarsh
//console.log(user.age); //23
 //adarsh


//bracket notation
//console.log(user["name"]); //adarsh
//console.log(user["age"]); //23
//console.log(user["full name"]); //adarsh kumar
//console.log(user[mySym]);
// console.log(typeof user.mySym);

//bracket notation is useful when key is dynamic


user.email = "raju@gmail.com"
//console.log(user["email"]);

// Object.freeze(user) //object ko freeze kar do, ab koi change nahi hoga
user.email = "adarshsingh@gmail.com"
//console.log(user["email"]);


user.greeting = function(){
    console.log("Hello JS user");
    
}
user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(user.greeting());

console.log(user.greetingTwo());

// In JavaScript, if a function does not explicitly return a value, it returns `undefined` by default.
