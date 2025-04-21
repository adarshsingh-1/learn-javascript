let myName = "adarsh   "
console.log(myName.truelength);


let myHeroes = ["Batman", "Superman", "Spider-Man"]

let heroPower = {
    thor: "thunder",
    superman: "strength",
    spiderman: "spider",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.adarsh = function(){
    console.log(`adarsh is present in all objects`);
}

Array.prototype.aadarsh = function(){
    console.log(`adarsh is present in all arrays`);
}


// heroPower.adarsh()

// myHeroes.aadarsh()
// heroPower.aadarsh()


//inheritance

const user = {
    name:"adarsh",
    email: "adarsh@gmail.com",
}
const Person = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssigment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport

}

// Teacher.__proto__ = user

//modern Syntax

// Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiAurCode      "
String.prototype.truelength = function(){
    // console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
         
}

anotherUserName.truelength()

"adarsh".truelength()
"raju".truelength()
