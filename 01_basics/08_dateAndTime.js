// ******************************** Dates *********************************
// Date : Date is an object in javascript.
// JavaScript stores dates as number of milliseconds since January 01, 1970



let myDate = new Date();
console.log(myDate); // Current date and time



// console.log(myDate.toString()); // Current month (0-11)
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());



//console.log(myDate.getMonth()+1); // Current date (1-31)
//console.log(myDate.getDate()); // Current date (1-31)
//console.log(myDate.getDay()); // Current day (0-6)
//console.log(myDate.getFullYear()); // Current year (4 digits)
//console.log(myDate.getHours()); // Current hour (0-23)
//console.log(myDate.getMinutes()); // Current minutes (0-59)//


//deaclare date = new Date(year, month, day, hours, minutes, seconds, milliseconds)
// let createDate = new Date(2023, 0, 1); // January 1, 2023
//let createDate = new Date("2023-01-14") // January 14, 2023
let createDate = new Date("01-14-2023") //
// console.log(createDate.toLocaleString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1694774400000
// console.log(createDate.getTime()); // 1694774400000
// console.log(Math.floor(Date.now()/1000)); 


let newDate = new Date()
console.log(newDate); // Current date and time



