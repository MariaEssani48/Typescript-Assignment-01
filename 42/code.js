// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Array of magicians' names
var magicians = ["Harry", "Peter", "Smith", "Chris", "Dynamo"];
// Declaring function to print magicians' names
function show_magicians(nameArray) {
    var i = nameArray.length - 1;
    for (var a = 0; a <= i; a++) {
        console.log(nameArray[a]);
    }
}
// Declaring function to print magicians' names with Great
function make_great(name_Array) {
    var i = name_Array.length - 1;
    for (var a = 0; a <= i; a++) {
        console.log("Great " + name_Array[a]);
    }
}
// Invoking function to print magicians' names
make_great(magicians);
console.log("\n");
show_magicians(magicians);
