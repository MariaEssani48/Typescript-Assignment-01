// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// declaring function with Pakistan as default country
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("\n" + city + " is in " + country);
}
// invoking functions with cities in Pakistan
describe_city("Karachi");
describe_city("Multan");
// invoking functions with cities not in Pakistan
describe_city("Riyadh");
