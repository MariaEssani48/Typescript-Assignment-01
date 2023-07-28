// function declaration with object of car key-value pairs
function car_Features(manufacturer, model) {
    var Others = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Others[_i - 2] = arguments[_i];
    }
    var cars;
    cars = {
        Make: manufacturer,
        Model: model,
    };
    var b = Others.length;
    if (b != 0) {
        cars.more_features = Others;
        return cars;
    }
    else {
        return cars;
    }
}
// function invocation for different group of car features
var vehicle = car_Features("Toyota", "Corolla", "color: blue", "transmission: Manual");
console.log(vehicle);
var vehicle2 = car_Features("Toyota", "Corolla", "color: blue");
console.log(vehicle2);
var vehicle3 = car_Features("Toyota", "Corolla");
console.log(vehicle3);
