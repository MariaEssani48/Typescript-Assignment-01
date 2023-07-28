// Declaring function
function make_album(artist_Name: string, album_Title: string){
    const music_Album = {
        name:  artist_Name,
        title: album_Title,
    
    };
    return music_Album;

}
// invoking to make three dictionaries
let a = make_album("Nazia Hassan", "Disco Deewane");
console.log(a);
let b = make_album("Ali Zafar", "Jhoom",);
console.log(b);
let c = make_album("Atif Aslam", "Jal pari");
console.log(c);



