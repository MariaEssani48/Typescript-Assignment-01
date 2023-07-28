/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
/*Maria Essani
  7/7/2023*/
var othrGuests = ["John", "Faraz", "Albert", "Ali", "Peter"];
var j;
for (j = 0; j <= 4; j++) {
    console.log("Mr" + " " + othrGuests[j] + "!" + " " + "You are cordially invited at my place for dinner.");
}
console.log("\n" + "\t" + "Albert can't come to the dinner at my home" + "\n");
var finalGuests = ["John", "Faraz", "Ahmed", "Ali", "Peter"];
var k;
for (k = 0; k <= 4; k++) {
    console.log("Mr" + " " + finalGuests[k] + "!" + " " + "You should come!");
}
