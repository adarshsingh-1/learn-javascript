//const tinderUser = new Object() //singleton method

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "adarsh"
tinderUser.isLoggedIn = false





// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullName: {
            firstname: "adarsh",
            lastname: "singh"
        }
    }
}

//console.log(regularUser.fullname.userfullName.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj3 = {5:"a", 6: "b"}


//methods of object assining
// const obj3 = {obj1, obj2}
//const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);


const adminUser = [
    {
        id: 1,
        email: "adarsh@gmail.com"
    },
    {
        id: 2,
        email: "raju@10234"
    },
    {
        id: 3,
        email: "raj@10234"
    }
];

//  console.log(adminUser[0].email);


//console.log(tinderUser);

//console.log(Object.keys(tinderUser)); // gives the keys of the object
//console.log(Object.values(tinderUser)); // gives the values of the object
//console.log(Object.entries(tinderUser)); // gives the key value pair of the object
//console.log(tinderUser.hasOwnProperty('id')); // checks if the object has the property


//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// ************************************* Object Deconstructing **************************************


// Object destructuring JavaScript ka ek feature hai jo humein kisi object ke properties ko easily extract karke individual variables mein assign karne ka tareeqa deta hai. Ye short syntax hai jo code ko clean aur readable banata hai.


const student = {
    fullName: "Adarsh",
    Class: 10,
    course: "CSE"
  };
  
  // Normal way:
  const fullName = student.fullName;
  const Class = student.Class;
  
//Rename karna destructuring mein:
const { fullName: studentName, Class: studentAge } = student;

// console.log(studentName); // Adarsh
// console.log(studentAge);  // 10

  //  Destructuring way:
  const { name, age, course } = student;
  
  console.log(fullName);  // Adarsh
  console.log(Class);   // 10
  console.log(course); // CSE








