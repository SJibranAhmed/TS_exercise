let ordinal_num : any = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let i of ordinal_num){
    if(i == 1){
        console.log(i + 'st')
    }else if(i == 2){
        console.log(i + 'nd')
    }else if(i == 3){
        console.log(i + 'rd')
    }else{
        console.log(i + 'th')
    }
}
