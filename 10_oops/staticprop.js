class User {
    constructor(username, email, password){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
    static createId(){
        return `123`
    }

}


const adarsh = new User("adarsh")
console.log(adarsh.createId());


class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;

    }
}


const iphone = new Teacher("iphone", "iphone@gmail.com")
iphone.logMe() // Username is 
console.log(iphone.createId());

