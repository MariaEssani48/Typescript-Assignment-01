var odd_1 = [1, 3, 5, 7, 9];
console.log(odd_1);
console.log("\n");
var j;
for (j = 0; j <= 4; j++) {
    if (odd_1[j] == 3) {
        console.log("3 is present in array");
        break;
    }
}
if (j == 5) {
    console.log("3 is not present in array");
}
