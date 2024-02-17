var favorite_cars = ['Toyota', 'KIA', 'Audi', 'BMW'];
for (var _i = 0, favorite_cars_1 = favorite_cars; _i < favorite_cars_1.length; _i++) {
    var mode = favorite_cars_1[_i];
    if (mode == 'Toyota') {
        console.log(mode + " is product large scale of cars");
    }
    else if (mode == 'KIA') {
        console.log(mode + " is Indian company cars");
    }
    else if (mode == 'Audi') {
        console.log(mode + " is so expensive cars");
    }
    else if (mode == favorite_cars[3]) {
        console.log(mode + "'s power is strongest");
    }
}
