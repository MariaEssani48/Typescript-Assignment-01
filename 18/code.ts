
//  Question 18

/* Maria Essani
   7/7/2023 */
const places: string [] = ["Baku", "Dubai", "Thailand", "Alaska", "Greece"];
console.log(places);
const places_2: string [] = [];
let u: number;
for(u=0; u<=4; u++){
    places_2[u] = places[u]
}
places.sort();
console.log("Alphabetical order:\n"+places+"\n");
console.log("original order:" +"\n"+ places_2+"\n");
places.reverse();
console.log("Reverse alphabetical order:\n"+places+"\n");
console.log("original order:" +"\n"+ places_2+"\n");

places_2.reverse();
console.log("reverse of original order:" +"\n"+ places_2+"\n");

places_2.reverse();
console.log("original order:" +"\n"+ places_2+"\n");

places_2.sort();
console.log("original order changed in alphabetical order:" +"\n"+ places_2+"\n");

places_2.reverse();
console.log("original order changed in  reverse alphabetical order:" +"\n"+ places_2+"\n");




