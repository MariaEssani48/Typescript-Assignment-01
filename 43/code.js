// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Array of magicians' names
var magicians = ["Harry", "Peter", "Smith", "Chris", "Dynamo"];
var magicians_2 = [];
// Declaring function to print magicians' names
function show_magicians(nameArray) {
    var i = nameArray.length - 1;
    for (var a = 0; a <= i; a++) {
        console.log(nameArray[a]);
    }
}
// Declaring function with  magicians' names with Great
function make_great(nameArray1, nameArray2) {
    var i = nameArray1.length - 1;
    for (var a = 0; a <= i; a++) {
        nameArray2[a] = "Great " + nameArray1[a];
    }
    return nameArray2;
}
// Invoking function to print magicians' names in original array
show_magicians(magicians);
console.log("\n");
show_magicians(make_great(magicians, magicians_2));
