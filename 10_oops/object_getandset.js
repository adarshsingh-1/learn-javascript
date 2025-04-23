const user = {
    _email: "adarsh@gmail.com",
    _password: "abc",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
};


const student1 = Object.create(user);
console.log(student1.email); //
