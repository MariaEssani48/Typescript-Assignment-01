var current_users = ["Sana", "AISHA", "Misbah", "Farzana", "Fatima"];
var new_users = ["Mishal", "Sana", "Laiba", "aisha", "Farzana"];
for (var i = 0; i <= 4; i++) {
    for (var j = 0; j <= 4; j++) {
        if (new_users[i].toLowerCase() == current_users[j].toLowerCase()) {
            console.log(new_users[i] + " have to enter new  Username");
        }
    }
}
