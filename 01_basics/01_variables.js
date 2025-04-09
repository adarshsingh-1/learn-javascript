const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; //undefined

// accountId = 23 it is not allowed

accountEmail = "adarsh@gmail.com"

accountPassword = "12345"

accountCity = "Kolkata"


console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);


/*
prefer not to use var because of the issue in block scope and functional scope

*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
