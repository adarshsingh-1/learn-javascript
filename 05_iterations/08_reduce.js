//reduce() JavaScript ka ek powerful array method hai jo array ke sabhi elements ko ek single value mein reduce karta hai — jaise ki sum, product, max, ya custom output.
//syntax:
// array.reduce(callback, initialValue)


const myNums = [1, 2, 3];
const sumWithInitial = myNums.reduce(function (acc, currVal){
    //console.log(`acc: ${acc}, currVal: ${currVal}`);
    
    //return acc + currVal;
},0) 


//using arrow function
const sumWithInitialArrow = myNums.reduce((acc, currVal) => {
    //console.log(`acc: ${acc}, currVal: ${currVal}`);
    //return acc + currVal;
}, 0)


//using arrow function with implicit return
const sumWithInitialArrow2 = myNums.reduce((acc, currVal) => acc + currVal, 0)

const shoppingCart = [
    { item: "js-course", price: 100 },
    { item: "php-course", price: 200 },
    { item: "python-course", price: 300 },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(totalPrice); 