var fullName = "Adarsh Singh";

var obj = {
    fullName: "Hacked Full Name",

    prop:{
        fullName: "Inside Prop",
        getFullName: function() {
            return this.fullName;
        },
    },

    getFullName: function() {
        return this.fullName;
    },


    //same function but using arrow function
    getFullNameV2:() => this.fullName,
    // Arrow functions do not have their own 'this', they inherit it from the enclosing context
    //if executed in browser, this will refer to the global/window object


    getFullNameV3: (function(){
        return this.fullName;
    })(), //iife and this will refer to the global/window object

};

console.log(obj.prop.getFullName);

console.log(obj.getFullName);



console.log(obj.getFullNameV2);


console.log(obj.getFullNameV3);
// In getFullNameV3, an IIFE is used which runs immediately and returns the global fullName ("Adarsh Singh") because this inside an IIFE refers to the global object. So obj.getFullNameV3 stores the string, not a function. Calling obj.getFullNameV3() throws a TypeError because you're trying to call a string as a function.




ˀ