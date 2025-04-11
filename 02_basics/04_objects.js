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
console.log(obj4);


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

console.log(Objest.keys(tinderUser)); // gives the keys of the object
console.log(Objest.values(tinderUser)); // gives the keys of the object




