// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var Pizza_1 = ["BBQ", "Margharita", "Fajita"];
var j = 0;
while (j <= 2) {
    console.log("I like" + " " + Pizza_1[j] + " Pizza");
    j++;
}
console.log("\n" + "I really love to eat pizza with my friends." + " The cheese on top with traditionally seasoned chicken and veggies are delicious." + "\n" + "  Salad with Pizzas are good compliments.");
