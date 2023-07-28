//WITH ERROR
var guests = ["John", "Faraz", "Albert", "Ali", "Peter"];
var i;
for (i = 0; i <= 4; i++) {
    guests[1] = guests[10];
    console.log("Mr" + " " + guests[i] + "!" + " " + "You are cordially invited at my place for dinner.");
}
console.log(guests);
//   Error fixing*
console.log("\t" + "\n" + "Error fixing*" + "\t" + "\n");
var guests_1 = ["John", "Faraz", "Albert", "Ali", "Peter"];
var j;
for (j = 0; j <= 4; j++) {
    console.log("Mr" + " " + guests_1[j] + "!" + " " + "You are cordially invited at my place for dinner.");
}
console.log(guests_1);
