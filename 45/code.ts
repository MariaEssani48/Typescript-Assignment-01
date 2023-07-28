// function declaration with object of car key-value pairs
 function car_Features(manufacturer: string, model: string, ...Others){
    let cars : {
        Make: string,
        Model: string,
        more_features?: string[];
        
    }
    cars = {
        Make: manufacturer,
        Model: model,  
    }
    let b = Others.length;
    if (b != 0){
    cars.more_features =  Others;
    return cars;
    }
    else {
    return cars;
    }
 }
// function invocation for different group of car features
let vehicle = car_Features("Toyota", "Corolla", "color: blue", "transmission: Manual");
console.log(vehicle);

let vehicle2 = car_Features("Toyota", "Corolla", "color: blue");
console.log(vehicle2);

let vehicle3 = car_Features("Toyota", "Corolla");
console.log(vehicle3);




