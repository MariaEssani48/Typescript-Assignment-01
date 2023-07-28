// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// declaring function to store and summarize sandwhich constituents
function sandwich() {
    var sandwich_item1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sandwich_item1[_i] = arguments[_i];
    }
    var sandwich_item2 = [];
    var i = sandwich_item1.length - 1;
    for (var a = 0; a <= i; a++) {
        sandwich_item2[a] = sandwich_item1[a];
    }
    console.log("\n");
    console.log("Your Sandwich contains:");
    console.log("\n");
    for (var a = 0; a <= i; a++) {
        if (a == 0 && sandwich_item2[a] != undefined) {
            var t = a + 1;
            console.log(t + ". " + sandwich_item2[a]);
        }
        else if (a > 0 && a < i && sandwich_item2[a] != undefined) {
            var t = a + 1;
            console.log(t + ". " + sandwich_item2[a]);
        }
        else if (a == i && a != 0 && sandwich_item2[a] != undefined) {
            var t = a + 1;
            console.log(t + ". " + sandwich_item2[a]);
        }
    }
}
// invoking function with different number of sandwhich constituents
sandwich("Potato");
sandwich("veggies", "chicken");
sandwich("Mayonaise", "chicken", "Butter");
sandwich("Mayonaise", "Cucumber", "Cheese", "Chicken");
