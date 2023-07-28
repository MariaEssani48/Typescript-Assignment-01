// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

// function declaration

function city_country(city: string, country: string){
    console.log("\n"+'"'+city + ","+" "+ country+'"');
    return 0;
}

// function invoking
city_country("Washington", "America");
city_country("Paris", "France");
city_country("Islamabad", "Pakistan");
// function invoking to print return value
console.log("\n"+ city_country("Islamabad", "Pakistan"));
