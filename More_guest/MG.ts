var guest : any = ['Munaaf', 'Hasan', 'Talha'];
let new_guest : string = 'Moazzam'
guest.pop()
guest.push('Moazzam')

//console.log('I\'ve found bigger table')

guest.unshift('Waiz')
guest.splice(2,0,'Huzaifa')
for(let i of guest){
    console.log(`Please ${i} accept my invitation fot dinner`)
}


