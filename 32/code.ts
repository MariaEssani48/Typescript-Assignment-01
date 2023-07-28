let current_users = ["Sana", "AISHA", "Misbah", "Farzana", "Fatima"];
let new_users = ["Mishal", "Sana", "Laiba", "aisha", "Farzana"];
for(let i =0; i<=4; i++){
    for(let j=0; j<=4; j++){

       if(new_users[i].toLowerCase() == current_users[j].toLowerCase() ){
        console.log(new_users[i]+ " have to enter new  Username")
       }
    }
}