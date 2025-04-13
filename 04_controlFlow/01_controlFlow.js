//if statement

//if condition - > true andar ka code execite karenge
// if(2 != "2"){
//     console.log("done");
    
// }
// = -> assigment operator
// == -> equality

// <, >, <=, >=, ==,!=, ===, !==


// const isUserLoggedIn = true;
// const temperature = 41;

// if(temperature === 41){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50");
    
// }

// console.log("Execute");


// const score = 200;
// if(score>100){
//     const power = "fly"
//     console.log(`user has power of ${power}`);
// }
// console.log(`user has power of ${power}`); power can't be accessed outside the block


//shorthand if statement
const balance  = 1000;
//  if(balance>500) console.log("test");

if(balance<500){
    console.log("less than 500");
}else if(balance<750){
    console.log("less than 750");
}else{
    console.log("less than 1200");
}


const userLoggedIn = true;
const debitCard = true;
const LoogedInFromGoogle = false;
const LoogedInFromEmail = false;
//checking multiple conditions


if(userLoggedIn && debitCard && balance>500){
    console.log("user can do transaction");
}


if(LoogedInFromGoogle || LoogedInFromEmail){
    console.log("user can do transaction");
}








 




