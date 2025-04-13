// forEach() is a higher-order function used to iterate over an array.
// It executes a provided function once for each array element.
//syntax
// array.forEach(callbackFunction(currentValue, index, array))

// forEach() kuch bhi return nahi karta — iska return value undefined hota hai.


// currentValue: current item in the loop
// index: index of current item (optional)
// array: the original array being iterated (optional)





//for each loop with arrays

const coding = ["js", "py", "rb", "go", "php"];

//1.Simple Example:
coding.forEach(function (val){
    //console.log(val)
})

//2.Using Arrow Function
coding.forEach( (item) => {
    //console.log(item)
} )

// 3.Passing a Function Reference:
function printMe(item){
   //console.log(item)
}
// coding.forEach(printMe)


//4. Using Index and Full Array
coding.forEach((item, index, arr) => {
    //console.log(item, index, arr)
})


const myCoding = [
    {
        languageName:"javascript",
        fileType:"js",
    },
    {
        languageName:"python",
        fileType:"oy",
    },
    {
        languageName:"ruby",
        fileType:"rb",
    },
    {
        languageName:"go",
        fileType:"go",
    },
]

// Iterating over Array of Objects:
myCoding.forEach((item) => {
    console.log(item.languageName, item.fileType)
})


//*imp* Used a lot in real-world APIs where data is returned as an array of objects.





