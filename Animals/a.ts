let animal : any = ['cow', 'goat', 'camel']
let message :string =`${animal} all are eat grass and plants.` 
for(let pet of animal){
    if(pet == animal[0]){
        console.log(`${pet} milk drinking a lot`)
    }else if(pet == animal[1]){
        console.log(`${pet} meat is so expensive`)
    }else{
        console.log(`${pet} is aeroplane of desert`)
    }
}
console.log(message)