//ES6 Ecmascript 2015


// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         // complex logic
//         return `${this.password}abc`;
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const adarsh = new User("adarsh", "adarsh@gmail.com", "123");


// console.log(adarsh.encryptPassword());
// console.log(adarsh.changeUsername());



//behind the scenes


function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

const raj = new user("raj", "raj@gmail.com", "123");


console.log(raj.encryptPassword());
console.log(raj.changeUsername());
