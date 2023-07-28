

// Array of magicians' names
let magicians = ["Harry" , "Peter" , "Smith" , "Chris" , "Dynamo"];

// Declaring function to print magicians' names
function show_magicians(nameArray: string[]){
    let i = nameArray.length-1;
    console.log(i);
    for(let a=0; a<=i; a++){
    console.log(nameArray[a]);
    }

}
// Invoking function to print magicians' names
show_magicians(magicians);

