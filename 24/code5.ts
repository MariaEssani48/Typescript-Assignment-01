let odd = [1, 3, 5, 7, 9];
console.log(odd);
console.log("\n");



let i;
for(i=0; i<=4; i++){
    if(odd[i] == 10){
        console.log("10 is present in array");
        break;
    } 
}
if(i == 5){
    console.log("10 is not present in array");
}

