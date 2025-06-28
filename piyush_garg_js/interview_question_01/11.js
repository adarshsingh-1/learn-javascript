const obj = {
    height: 30,
};

console.log(obj.height);

delete obj.height;

console.log(obj.height);


const obj1 = Object.create({
    height: 30,
});

console.log(obj1.height);

delete obj1.height;

console.log(obj1.height);



// When a property is defined directly on an object, delete removes it completely. But if the object is created using Object.create(), the property lives on the prototype, not the object itself. So delete won't affect the inherited property, and it can still be accessed via the prototype chain.