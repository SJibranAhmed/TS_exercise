let magicians_name: string[] = ['Jibran', 'Hasan', 'Munaaf']
// let make_great = (arr)=>{
//     let array = arr
//     for(let i = 0; i<array.length; i++){
//      console.log(arr[i] + ' the great')       
// }
// } 

// make_great(magicians_name)


let copy_magicians_name : string[] = magicians_name.slice()
copy_magicians_name.push('Waiz')

console.log(magicians_name)
console.log(copy_magicians_name)