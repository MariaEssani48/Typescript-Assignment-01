//  Question 17
/* Maria Essani
   7/7/2023 */
var Guests_3 = ["John", "Faraz", "Ahmed", "Ali", "Peter"];
var node_2 = "Sam";
Guests_3.unshift("William");
Guests_3.splice(3, 0, "Tahir");
Guests_3.push(node_2);
console.log(Guests_3);
var A_3;
for (A_3 = 7; A_3 > 1; A_3--) {
    console.log(Guests_3[A_3] + " " + "Sorry, You are not invited");
    Guests_3.pop();
}
console.log(Guests_3 + " " + "Both of you are invited");
