let current_user : string[] = ['jibran', 'salman', 'usman']
let new_user : string[]=  ['fahad', 'uzair', 'usman']


for(let i = 0 ; i < new_user.length ; i++){

    for(let j = 0 ; j < new_user.length ; j++){
    if(new_user[i] == current_user[j]){
        console.log(`${new_user[i]} you will need new username`)

    }else{
    console.log(`${new_user[i]}username is available`)}}
}