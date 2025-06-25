console.log("adarsh ","i love to play football");


//1. Perform and log the result of the following expression:
console.log("45*2-10");

//2. Use console.log to display the current year
const currentYear = new Date()
console.log(currentYear.getFullYear());

//3. Create two varibales for first and last name concatenate and log them
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
const fName = `${firstName} ${lastName}`; //using backticks
console.log(fullName);


//4. Track the value of a variable by logging it before and after updating
var a = 12;
console.log(a);
a = 15;
console.log(a);


//5. Use console.error to simulate an error message
console.error("This is an error message!");


//6. log the square of the number 12 to the console
console.log(12 * 12);



//7. Print the type of a variable holding the value 
var a = true;
console.log(typeof a); // boolean

//8. Create a varibale holding your age and log whether it's greater than  18

var age = 2;
if(age> 18) {
    console.log(true);
}
else console.log(false);


//9. Log the result of 100/0 and observe the output
console.log(100 / 0); 

//11. Declare a variable using let and log its value
let aa = 10;
console.log(aa);

//12. Create a constant to store the value of PI and log it.
console.log(Math.PI); 

// 13. Reassign a value to a variable declared with let and log the result.
let b = 20
b = 25
console.log(b);


// 14. Check the type of null and log it.
console.log(typeof null); 


// 15. Create a variable with a number as a string (e.
var c = "25";
console.log(typeof b); 

// 16. Use typeof to check the type of a boolean variable.
var bb = true;
console.log(typeof bb); 


// 17. Create three variables of types string, number, and boolean, and log their values.
var str = "Hello";
var num = 42;
var bool = false;
console.log(str, num, bool);


// 18. Declare a variable without assigning a value.
var d;
console.log(typeof d); 

// 19. Create a variable with undefined type. Log its type.
let e = undefined;
console.log(typeof e);


// 20. Use const to create an array. Try reassinging the array and observe the error.
const arr = [1, 2, 3];
arr.push(5)
console.log(arr);


// 21. Write a for loop to print numbers from 1 to 50.

let count = 1;
while(count <= 50){
    console.log(count);
    count++;
}

//22. Use a while to sumup the nnumbers from 1 to 10
let i = 1;
let sum = 0;
while(i<11){
    sum += i;
    i++;
}
console.log("Sum of numbers from 1 to 10 is: " + sum);

//23. Create a for..of loop to log each character of the string "JavaScript"
const str2 = "JavaScript";
for (const char of str2) {
    console.log(char);
}


//24. Write a for loop that skips even numbers between 1 and 20.
for( let i = 0 ;i<21;i++){
    if(i % 2 == 0){
        continue;
    }
    else{
        console.log(i);
    }
}

//25. Usw a do..while loop to print numbers from 5 to 1.
let j = 5;
do {
    console.log(j);
    j--;
} while (j >= 1);


//26. Create a for loop that calculates the factorial of a number (e.g., 5).
let factorial = 1;
for(let i = 5; i>0 ; i--){
    fact = factorial *= i;
}
console.log("Factorial of 5 is: " + fact);


//27. Write a nested loop to print a 3x3 grid of numbers.

var hold = 1;
for(var a=1 ;a<4; a++){
    var str = "";
    for(var c = 1; c<4; c++){
        str+= `${hold} `;
        hold++;
    }
    console.log(str);
}




//28. Use a for loop to reverse an array [1, 2, 3, 4].
var a = [1, 2, 3, 4];
// console.log("Original array: ", a);

for(var ii = 0;ii<Math.floor(a.length / 2); ii++){
    var temp = a[ii];
    a[ii] = a[a.length - 1 - ii];
    a[a.length - 1 - ii] = temp;
}
console.log(a);


//29. Write while loop that logs numbers from 1 to 100 divisible by 5.

let p = 1;
while(p <= 100) {
    if (p % 5 === 0) {
        console.log(p);
    }
    p++;
}


//30. Use a for...in loop to iterate over an object and log its keys.
const obj = {
    name: "John",
    age: 30,
    city: "New York"
};
for (const key in obj) {
    console.log(key);
}


//31. Create an array of your top 5 favouraite movies and log it
const movies = ["Inception", "The Dark Knight", "Interstellar", "Pulp Fiction", "The Shawshank Redemption"];

movies.forEach(function(value){
    console.log(value);
})


//32. Find and log the second element of the array
var nums = [10, 20, 30, 40, 50];
console.log(nums[1]); 



// 33. Add two new elements to the start of an array using . unshift.
var nums = [10, 20, 30, 40, 50];
nums.unshift(1);
nums.unshift(0);
console.log(nums); 


// 34. Remove the last element of an array and log the updated array.
var nums = [10, 20, 30, 40, 50];
nums.pop();
console.log(nums);


// 35. Use slice() to extract the first three elements of an array.
var nums = [10, 20, 30, 40, 50];
console.log(nums.slice(0, 3));


//












