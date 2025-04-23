const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);





// console.log(Math.PI);
// Math.PI = 4;
// console.log(Math.PI); 


const student = {
    name: "adarsh",
    age: 23,
    isStudent: true,

    orderCourse: function(){
        console.log(`Course wan't present`);
    },

}

console.log(Object.getOwnPropertyDescriptor(student, "name"));

// Object.defineProperty(student, 'name', {
//     writable: false,
//     configurable: false,
//     enumerable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(student, "name"));


for (let [key, value] of Object.entries(student)){
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
    
}
