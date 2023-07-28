//Question 16
/*MARIA ESSANI
7/7/2023*/
let Guests_2 = ["John", "Faraz", "Ahmed", "Ali", "Peter" ];
let node = "Sam";
  
console.log("\n"+"\t"+ "I wanna give invitiation to more people"+"\n");


Guests_2.unshift("William");
Guests_2.splice(4,0,"Tahir");
Guests_2.push(node);

let A_2: number;
for(A_2=0; A_2<= 7; A_2++){
  console.log("Mr" + " " + Guests_2[A_2] + "!" + " "+ "kindly consider invitaion.");
  }
