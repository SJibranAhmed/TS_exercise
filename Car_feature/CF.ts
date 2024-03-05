//function information about car
class CarFeature {

    manufacture: string
    model: string
    name: string = ''
    color: string = ''
    constructor(manu: string, mod: string) {
        this.manufacture = manu
        this.model = mod
    }
    AdditionFeature(name: string, col: string) {
       this.name = name
       this.color = col
    }
}

// Always receive function
let carFeature = new CarFeature('Honda', '2020')
console.log(carFeature)

//Color and optional feature
carFeature.AdditionFeature('Sportage', 'black')
console.log(carFeature)