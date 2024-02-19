var car_architecture = function (manuf, mod) {
    var arbit = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arbit[_i - 2] = arguments[_i];
    }
    var obj = {
        manufacture: manuf,
        model: mod
    };
    arbit.forEach(function (arg) {
        var key = arg.split(' ');
        obj[key[0]] = key[1];
    });
    return console.log(obj);
};
//calling function
car_architecture('Toyota', '2016', 'hp 2000 hp');
car_architecture('Audi', '2010', 'price 56 lakhs');
car_architecture('Suzuki', '2022', 'color blue');
