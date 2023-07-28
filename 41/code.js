// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Array of magicians' names
var magicians = ["Harry", "Peter", "Smith", "Chris", "Dynamo"];
// Declaring function to print magicians' names
function show_magicians(nameArray) {
    var i = nameArray.length - 1;
    console.log(i);
    for (var a = 0; a <= i; a++) {
        console.log(nameArray[a]);
    }
}
// Invoking function to print magicians' names
show_magicians(magicians);
