let favorite_place:string[] = ['Macca', 'London', 'Egypt', 'Spain']


console.log('original order')
console.log(favorite_place)
 

console.log(" \n alphabetic order")
console.log([...favorite_place].sort())


console.log('\n original order again')
console.log(favorite_place)


console.log(" \n reverse alphabetic order")
console.log([...favorite_place].sort().reverse())


console.log('\n back to original order')
console.log(favorite_place)


console.log('\n sorted array')
console.log([...favorite_place].sort())


console.log('\n reverse array')
console.log([...favorite_place].reverse())



