//  Question 18
/* Maria Essani
   7/7/2023 */
var places = ["Baku", "Dubai", "Thailand", "Alaska", "Greece"];
console.log(places);
var places_2 = [];
var u;
for (u = 0; u <= 4; u++) {
    places_2[u] = places[u];
}
places.sort();
console.log("Alphabetical order:\n" + places + "\n");
console.log("original order:" + "\n" + places_2 + "\n");
places.reverse();
console.log("Reverse alphabetical order:\n" + places + "\n");
console.log("original order:" + "\n" + places_2 + "\n");
places_2.reverse();
console.log("reverse of original order:" + "\n" + places_2 + "\n");
places_2.reverse();
console.log("original order:" + "\n" + places_2 + "\n");
places_2.sort();
console.log("original order changed in alphabetical order:" + "\n" + places_2 + "\n");
places_2.reverse();
console.log("original order changed in  reverse alphabetical order:" + "\n" + places_2 + "\n");
