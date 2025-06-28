const piyush = {
    name: "Piyush Garg",
    sayName: function() {
        console.log(this.name);  
    },
}


setTimeout(piyush.sayName,3*1000)