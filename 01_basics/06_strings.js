//how to declare string
const name = "adarsh"
const repoCount = 10

//console.log(name + repoCount + " value"); outdated syntax not to use


//new way is string interpolation
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//how to declare string
const gameName = new String("cricket-07");
//console.log(gameName); //String {"cricket"}



//accessing key value pair
//console.log(gameName[0]); //String {"cricket"}
//console.log(gameName.length); //6
//console.log(gameName.toUpperCase()); //CRICKET
//console.log(gameName.toLowerCase()); //cricket
//console.log(gameName.charAt(4)); //k
//console.log(gameName.indexOf("i")); //2




const newString = gameName.substring(0, 4);
//console.log(newString); //cric


const anotherString = gameName.slice(-8, 4);
//console.log(anotherString); 


//trim method
const newString1 = "   rajesh   "
//console.log(newString1); //   rajesh
//console.log(newString1.trim()); //rajesh


//replace method
const newString2 = "rajesh@20.com"
//console.log(newString2.replace("20", "google")); 
//console.log(newString2.includes("20")); //true

//split method
const sentence = "hello my name is adarsh"
console.log(sentence.split(" ")); //["hello", "my", "name", "is", "adarsh"]




//console.log(gameName.__proto__); //String {}



