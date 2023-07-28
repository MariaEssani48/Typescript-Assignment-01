// Declaring function
function make_album(artist_Name, album_Title) {
    var music_Album = {
        name: artist_Name,
        title: album_Title,
    };
    return music_Album;
}
// invoking to make three dictionaries
var a = make_album("Nazia Hassan", "Disco Deewane");
console.log(a);
var b = make_album("Ali Zafar", "Jhoom");
console.log(b);
var c = make_album("Atif Aslam", "Jal pari");
console.log(c);
