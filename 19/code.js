//  Question 19
/* Maria Essani
   7/8/2023 */
//Repeated part of Question 16
var Guests_4 = ["John", "Faraz", "Ahmed", "Ali", "Peter"];
var node_1 = "Sam";
Guests_4.unshift("William");
Guests_4.splice(4, 0, "Tahir");
Guests_4.push(node_1);
var A_4;
for (A_4 = 0; A_4 <= 7; A_4++) {
}
//   Part of Question 19
var totalGuests = Guests_4.length;
console.log("The total number of my guest is:" + " " + totalGuests);
