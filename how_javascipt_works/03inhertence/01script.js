// Define object p1 with properties and a method
const p1 = {
    fname: "Adarsh",
    lname: "Singh",
    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
};

// Create a new object p2 that inherits from p1
const p2 = Object.create(p1);

// Check the inherited fname before changing it
console.log("Before modification - p2 full name:", p2.getFullName());

// Change the fname in p2's prototype (i.e., p1)
p2.__proto__.fname = "Rohit";
p2.__proto__.lname = "Kumar";

// Print p1 and p2 after modification
console.log("p1 object:", p1);
console.log("After modification - p2 full name:", p2.getFullName());


