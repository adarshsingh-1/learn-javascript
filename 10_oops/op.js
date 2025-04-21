// const user = {
//     username: "raju",
//     loginCount: 4,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         // console.log(this);
        
        
        
//     }
// }




// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()  
// const date = new Date()



function user(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Hello ${this.userName}`);
        
    }

    return this
}
 //1.new keyword se empty object create hota hai jisse instance bolte hai
 //2. phir ek constructor function call hota hai
 //3. constructor function ke andar this keyword se instance ki properties set hoti hai
// 4. phir instance ko return kiya jata hai
// 5. constructor function ko call karne ke liye new keyword use hota hai

const userOne = new user("raju", 4, true);
const userTwo = new user("john", 5, false);
console.log(userOne.constructor);
console.log(userTwo);






