class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const adarsh = new Teacher("adarsh", "adarsh@gmail.com", "123");
adarsh.addCourse();

const raj = new User("raj");
raj.logMe() //

console.log(adarsh === raj); // false


console.log(adarsh instanceof Teacher); // ✅ true
console.log(adarsh instanceof User);    // ✅ true (because Teacher extends User)
console.log(raj instanceof User);       // ✅ true
console.log(raj instanceof Teacher);    // ❌ false
