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

function Person(fname, lname, contact) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;

    this.getname = function() {
        console.log(this.fname);
    }

    this.getContact = function(){
        console.log(this.contact);
    }

}

const p1 = new Person("Adarsh", "Singh", 7645678902);
const p2 = new Person("Jane", "Doe", 1234567890);
const p3 = new Person("John", "Smith", 9876543210);

console.log(p1);
console.log(p2);
console.log(p3);
