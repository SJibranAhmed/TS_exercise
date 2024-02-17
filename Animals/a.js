var animal = ['cow', 'goat', 'camel'];
var message = animal + " all are eat grass and plants.";
for (var _i = 0, animal_1 = animal; _i < animal_1.length; _i++) {
    var pet = animal_1[_i];
    if (pet == animal[0]) {
        console.log(pet + " milk drinking a lot");
    }
    else if (pet == animal[1]) {
        console.log(pet + " meat is so expensive");
    }
    else {
        console.log(pet + " is aeroplane of desert");
    }
}
console.log(message);
