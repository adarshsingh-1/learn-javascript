myFun()

var myFun = function(){
    console.log("Hello World 1");
    
}

myFun()

function myFun(){
    console.log("Hello World 2");
}

myFun()


// This code demonstrates function hoisting vs variable hoisting behavior. During the Memory Creation Phase, function myFun() is fully hoisted with its complete definition, while var myFun is hoisted but initialized as undefined. The first myFun() call executes the function declaration and prints 'Hello World 2'. Then var myFun gets assigned the function expression, overriding the original function. The second and third myFun() calls execute the function expression and print 'Hello World 1'. This shows how function declarations have higher precedence than variable declarations during hoisting, and demonstrates the difference between function expressions and function declarations in JavaScript's execution context.





