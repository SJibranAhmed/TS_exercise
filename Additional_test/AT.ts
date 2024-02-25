let car :string = 'Sportage'
let bike:string = 'Yamaha'

let condition:string = (car === 'Sportage')?`yes ${car}, Ture`:`no, False`

let condition2:string = (bike === 'Honda')?`yes ${bike}, Ture`:'no, False'

console.log(condition)
console.log(condition2)