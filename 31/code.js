var users = [];
var a = 0;
var m;
for (m = 0; m <= 4; m++) {
    if (users[m] == "Admin" && users[m] != undefined) {
        console.log("Hello Admin, would you like to see a status report?");
        a = a + 1;
    }
    else if (users[m] != undefined) {
        console.log("Hello " + users[m] + " thank you for logging in again.");
        a = a + 1;
    }
}
if (a == 0) {
    console.log("We need to find some users!");
}
