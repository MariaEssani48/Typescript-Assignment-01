// function with optional tracks parameter
function make_album2(artist_Name2, album_Title2, tracks) {
    var music_Album2 = {
        name: artist_Name2,
        title: album_Title2,
    };
    // condition to test presence of track argument in function call   
    if (tracks != undefined) {
        music_Album2.Tracks = tracks;
    }
    return music_Album2;
}
// function invoking without track parameter
var d = make_album2("Atif Aslam", "Jalpari");
console.log(d);
// function invoking with track parameter
var e = make_album2("Ali Zafar", "Jhoom", 8);
console.log(e);
