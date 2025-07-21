// Object Literals(Old Style object Creation)

// This directly creates a single object.
// Good for a single instance, not reusable.

// const person = {
//     fname : "Adarsh",
//     lname: "Singh",
//     contact: 7645678902,
//     getname: function(){
//         console.log("Raj");
//     },
//     getContact(){},
// }


// const p2 = {
//     fname:"Jane",
//     lanme: "Doe",
//     contact: 1234567890,
//     getname: function(){
//         console.log("Jane");
//     },


// }

//normal function -> camelCase
// getAge(), addNums(), printThis()


// constructor function -> PascalCase
// Example:

// function Person(fname, lname, contact) {
//     this.fname = fname;
//     this.lname = lname;
//     this.contact = contact;

//     this.getname = function() {
//         console.log(this.fname);
//     }

//     this.getContact = function(){
//         console.log(this.contact);
//     }

// }

// Person is a constructor function (PascalCase is the naming convention).
// You can create multiple objects (instances) using new Person(...).
// this refers to the object being created.
// This allows object reusability with dynamic data

// const p2 = new Person("Jane", "Doe", 1234567890);
// const p3 = new Person("John", "Smith", 9876543210);

// console.log(p1);//object p1 of base blue print Person
// console.log(p1.fname);
// console.log(p2);
// console.log(p3);


// After ES6, we can use the class keyword to create a blueprint for objects.

class Person{
    constructor(fname, lname, contact) {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }
    
    getname() {
        console.log(this.fname, this.lname);
    }
    
    getContact() {
        console.log(this.contact);
    }
}

// This is syntactic sugar over constructor functions.
// Easier and more organized syntax for creating reusable object blueprints.

const p1 = new Person("Adarsh", "Singh", 7645678902);

p1.getname(); // Adarsh Singh