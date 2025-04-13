//for in loop with objects

const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    go: 'Go',
    php: 'PHP',
}


for(const key in myObject){
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

//for in loop with arrays
const num = [1, 2, 3, 4, 5];
for (const index in num) {
    //console.log(num[index]); //accsessing the value using index
    //console.log(index); //accessing the index
}

//for in loop with maps
const map = new Map()
map.set('IN', "India")  
map.set('US', "United States")
map.set('UK', "United Kingdom")
map.set('AU', "Australia")

// for (const key in map) {
//     console.log(key);
// }


