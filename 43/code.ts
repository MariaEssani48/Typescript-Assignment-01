// Array of magicians' names
let magicians = ["Harry" , "Peter" , "Smith" , "Chris" , "Dynamo"];
let magicians_2: string[] = [];

// Declaring function to print magicians' names
function show_magicians(nameArray: string[]){
    let i = nameArray.length-1;
    for(let a =0; a<=i; a++){
      console.log(nameArray[a]);
}
}

// Declaring function with  magicians' names with Great
function make_great(nameArray1: string[], nameArray2: string[]){
    let i = nameArray1.length-1;
    for(let a=0; a<=i; a++){
    nameArray2[a] = "Great " + nameArray1[a]
    }
    return nameArray2;
}

// Invoking function to print magicians' names in original array
show_magicians(magicians);
console.log("\n");
show_magicians(make_great(magicians,magicians_2));
