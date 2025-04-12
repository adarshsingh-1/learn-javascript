// console.log("a");
// console.log("d");
// console.log("a");
// console.log("r");
// console.log("s");
// console.log("h");



function sayMyName(){
    console.log("a");
    console.log("d");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");

}

// Kuch nahi hota, kyunki tumne function ko call hi nahi kiya, sirf uska reference diya hai.
//sayMyName //function ka reference (iska matlab hai “ye function yaha maujood hai”)


//sayMyName() //function ko call kar diya (iska matlab “ab is function ka kaam karo”)



//function ka definition banate samay uske andar jo bhi input lete hai usse bolte hai parameters
// function sumTwoNumber(num1 , num2){
//     console.log(num1+num2);
// }


function sumTwoNumber(num1 , num2){
    //1.
    // let result = num1+num2
    // return result

    //2.
    return num1+num2

    // return statement ke baad khuch bhi print nhe hota hai
    console.log("adarsh");
    
}

// function ko call krte samay jab input lete hai usse bolte hai arguments 
//Tere function mein return keyword nahi hai, to JavaScript by default undefined return karta hai.


const result = sumTwoNumber(2,3); 
// console.log("Result: ", result);



function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return 
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("adarsh"))
// console.log(loginUserMessage())


//rest operator JavaScript ka ek feature hai jo multiple values ko ek single array mein pack karta hai. 
// Ye mainly function parameters ya destructuring mein use hota hai jab humein baaki sab values ek jagah chahiye hoti hain.
//syntax - ...name  // 3 dots ke saath


// Spread operator (same syntax ...) hota hai opposite — vo ek array ko toot kar individual values banata hai.


function calculateCartPrice(val1 , val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,300, 400, 500))

const user = {
    username: "adarshsingh",
    price:99
}


function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)


handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200, 400, 100, 600]


function returnSecondValue(getArray){
    return getArray[1]

}

console.log(returnSecondValue(myNewArray));








