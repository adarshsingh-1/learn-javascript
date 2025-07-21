const person = {
    fname : "Adarsh",
    lname: "Singh",
    contact: 7645678902,
    getname: function(){
        console.log("Raj");
    },
}


const p2 = {
    fname:"Jane",
    lanme: "Doe",
    contact: 1234567890,
    getname: function(){
        console.log("Jane");
    },


}


// constructor function -> Pascal Case
// Example:

function Person(fname, lname, contact) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;

    this.getname = function() {
        console.log(this.fname);
    }

}