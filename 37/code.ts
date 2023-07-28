//function for large shirts and default messages
function large_shirt(){
    console.log("\n"+"The size of the shirt is: "+ "large" + "\n"+ "It's message is: " +" I love Typescript");
}

//function for medium shirts and default messages
function medium_shirt(){
    console.log("\n"+"The size of the shirt is: "+ "medium" + "\n"+ "It's message is: " +" I love Javacript");
    
}
//function for other shirts with  different messages
function any_shirt(size: string, message: string){
    console.log("\n"+"The size of the shirt is: "+ size + "\n"+ "It's message is: " + message);
}
// invoking functions
large_shirt();
medium_shirt();
any_shirt("small","I love all languages");
