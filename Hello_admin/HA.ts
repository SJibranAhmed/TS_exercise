let user_nam : any = ['admin', 'clerk', 'manager', 'employee']

for(let u_n of user_nam){
    if(u_n == 'admin'){
    console.log(`Hello '${u_n}',\n would you like to see a status report?`)
}else{
    console.log(`Hello '${u_n}',\n thanks you for logging in again`)
}}
