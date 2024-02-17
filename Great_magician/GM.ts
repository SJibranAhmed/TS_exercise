let magicians_name: string[] = ['Jibran', 'Hasan', 'Munaaf']

let show_magician = (arr)=>{
    let array = arr
    for(let i = 0; i<array.length; i++){
     console.log(arr[i])       
}
} 
show_magician(magicians_name)

//Make great are function 

let make_great = (arr)=>{
    let array = arr
    for(let i = 0; i<array.length; i++){
     console.log(arr[i] + ' the great')       
}
} 

make_great(magicians_name)