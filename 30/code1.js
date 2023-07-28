var users = ["Admin", "William", "Eric", "David", "Samanatha"];
var User = "David";
var m;
for (m = 0; m <= 4; m++) {
    // if(User == users[m]){
    if (users[m] == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + users[m] + " thank you for logging in again.");
    }
    // }
}
