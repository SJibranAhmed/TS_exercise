//function information about car
var CarFeature = /** @class */ (function () {
    function CarFeature(manu, mod) {
        this.name = '';
        this.color = '';
        this.manufacture = manu;
        this.model = mod;
    }
    CarFeature.prototype.AdditionFeature = function (name, col) {
        this.name = name;
        this.color = col;
    };
    return CarFeature;
}());
// Always receive function
var carFeature = new CarFeature('Honda', '2020');
console.log(carFeature);
//Color and optional feature
carFeature.AdditionFeature('Sportage', 'black');
console.log(carFeature);
