for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is the best number");    
    }
    //console.log(element);
}



for (let i = 1; i < 10; i++) {
    //console.log(`Outer loop iteration: ${i}`);
    for (let j = 1; j < 10; j++) {
        //console.log(`Inner loop value ${j} and Outer loop iteration: ${i}`);
        //console.log(i+'*'+j+' = '+(i*j));
        
    }    
}


let mySuperHeroes = ["Ironman", "Thor", "Hulk", "Captain America", "Black Widow"];
//console.log(mySuperHeroes.length);

for (let index = 0; index < mySuperHeroes.length; index++) {
    const element = mySuperHeroes[index];
    //console.log(element);   
}



//break and continue
//break - terminates the loop
//continue - skips the current iteration and moves to the next one

for (let index = 0; index < mySuperHeroes.length; index++) {
    const element = mySuperHeroes[index];
    if(element == "Thor"){
        //console.log("Thor is the best hero");
        break;
    }
    
}


for (let index = 0; index < mySuperHeroes.length; index++) {
    const element = mySuperHeroes[index];
    if(element == "Thor"){
        //console.log("Thor is the best hero");
        continue
    }
    //console.log(element);
}


for(let index  = 1;index <= 10; index++){
    if(index == 5){
        console.log(`Detected 5, skipping`);
        continue;
    }
    console.log(`Current number is ${index}`);
}


for(let index  = 1;index <= 10; index++){
    if(index == 5){
        console.log(`Detected 5, skipping`);
        break;
    }
    console.log(`Current number is ${index}`);
}