var user_nam = ['admin', 'clerk', 'manager', 'employee'];
for (var _i = 0, user_nam_1 = user_nam; _i < user_nam_1.length; _i++) {
    var u_n = user_nam_1[_i];
    if (u_n == 'admin') {
        console.log("Hello '" + u_n + "',\n would you like to see a status report?");
    }
    else {
        console.log("Hello '" + u_n + "',\n thanks you for logging in again");
    }
}
