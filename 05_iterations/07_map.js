const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//implicitly return
const newNums1 = myNums.map((num) =>  num * 2 )
// console.log(newNums1);

//eplicitly return
const newNums2 = myNums.map((num) => { return num + 10})
// console.log(newNums2);

//using for each loop

const newNums3 = []
myNums.forEach((num) => {
    newNums3.push(num * 2)
})
// console.log(newNums3);




// +++++++++++++++++++++++++++++++++++Chaining++++++++++++++++++++++++++++++++++++++++++++++
//Chaining in JavaScript ek powerful technique hai jisme hum multiple methods ko ek saath line-by-line call karte hain, 
// ek hi object ya array pe.
// Cleaner and readable code
//Avoids unnecessary variables
//Easy to debug step-by-step


const newNums4 = myNums
    .map((num)=> num * 10)
    .map((num) => num + 5)
    .filter((num) => num > 50)
console.log(newNums4);





// const myNums = [1, 2, 3, 4, 5, 6];

// const result = myNums
//   .map(num => num * 10)        // [10, 20, 30, 40, 50, 60]
//   .filter(num => num >= 40)    // [40, 50, 60]
//   .reduce((acc, curr) => acc + curr, 0); // 150

// console.log(result); // 👉 150


// map() - sab numbers ko 10 se multiply karta hai
// filter() - sirf woh numbers rakhta hai jo 40 se bade hain
// reduce(): un filtered numbers ka sum karta hai