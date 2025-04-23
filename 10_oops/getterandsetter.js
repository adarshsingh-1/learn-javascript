// getter aur setter JavaScript mein aise methods hote hain jo kisi object ke properties ko access ya modify karne ke liye use kiye jaate hain — lekin ek tarike se, function ki tarah call nahi karte, phir bhi function jaise hi kaam karte hain


class user {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value
    }

    // yeh getter method hai password ke liye
    // Jab bhi hum user.password likhenge, yeh function chalega
    get password(){
        // password ko uppercase mein return kar raha hai
        return `${this._password}raju`;
    }

    // yeh setter method hai password ke liye
    // Jab bhi hum user.password = "value" karenge, yeh method chalega
    set password(value){
        // andar password ko uppercase karke store kar raha hai _password mein
        this._password = value.toUpperCase();
    }


}


const adarsh = new user("a@gmail.com","123")
console.log(adarsh.email);
console.log(adarsh.password);


