//WITH ERROR
const guests: string[] = ["John", "Faraz", "Albert", "Ali", "Peter" ];
  
  let i: number;
  for(i=0; i<= 4; i++){
    guests[1]=guests[10];
    console.log("Mr" + " " + guests[i] + "!" + " " + "You are cordially invited at my place for dinner.");
  }


  console.log(guests);

//   Error fixing*

  console.log("\t"+"\n"+"Error fixing*"+"\t"+"\n");
  const guests_1: string[] = ["John", "Faraz", "Albert", "Ali", "Peter" ];
  
  let j: number;
  for(j=0; j<= 4; j++){
    console.log("Mr" + " " + guests_1[j] + "!" + " " + "You are cordially invited at my place for dinner.");
  }
 console.log(guests_1);


