//switch case statement
//syntax

// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }

//If the break statement is not used inside a switch case, then after a match is found, all the subsequent cases will also be executed sequentially — except the default case (unless it appears after the matched case).

const month = 5;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
        //agar break nahi diya to jis case se match hua uske baad ke saare cases excute honge except the default case
    case 6:
        console.log("June");
        break;
    default:
        console.log("Default case");
        break;
}




const mon = "may";
switch(mon){
    case "january":
        console.log("January");
        break;
    case "february":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    case "may":
        console.log("May");
        break;
        //agar break nahi diya to jis case se match hua uske baad ke saare cases excute honge except the default case
    case "june":
        console.log("June");
        break;
    default:
        console.log("Default case");
        break;
}
