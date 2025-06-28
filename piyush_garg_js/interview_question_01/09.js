const piyush = {
    name:"Piyush Garg",
    sayName: function() {
        console.log(this.name);  
    },
}
const john = {
    name:"John Doe",
    sayName: function() {
        console.log(this.name);  
    },
}

function sayMyName(){
    console.log(this.name);
}


// sayMyName.call(piyush); 
piyush.sayName();

ˀ