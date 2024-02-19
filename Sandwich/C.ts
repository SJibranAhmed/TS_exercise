

let sandwich = (...items)=>{ 
    console.log('Ingredients : ')
    items.forEach(i => {
        console.log('- ' + i)
    })
console.log('Enjoy your sandwich \n \n')
}

//calling functions
sandwich('tikka', 'cheese')
sandwich('malai', 'karela')
sandwich('chicken', 'beef')